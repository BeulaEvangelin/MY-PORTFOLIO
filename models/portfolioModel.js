const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
    welcomeTitle: {
        type: String,
        required: true,
    },
    shortDescription: {
        type: String,
        required: true,
    }
});

const aboutMeSchema = new mongoose.Schema({
    aboutTitle: {
        type: String,
        required: true,
    },
    aboutDescription: {
        type: String,
        required: true,
    },
});

const skillsSchema = new mongoose.Schema({
    skillsTitle :  {
        type: String,
        required: true,
    },
    skills1 :  {
        type: Array,
        required: true,
    },
    skills2 :  {
        type: Array,
        required: true,
    },
});

const experienceSchema = new mongoose.Schema({
    company:  {
        type: String,
        required: true,
    },    
    title: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
    description:  {
        type: String,
        required: true,
    },

});

module.exports = {
    Intro : mongoose.model("intros", introSchema),
    About : mongoose.model("abouts", aboutMeSchema),
    Skills : mongoose.model("skills", skillsSchema),
    Experience : mongoose.model("experiences", experienceSchema),
}