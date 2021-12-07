const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    role: {
        type: String,
        default: "patients"
    },
    avatar: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F1194384%2Fadd_add_user_adduser_create_create_user_new_user_user_icon&psig=AOvVaw0zITA7GlldxxF2_EvB0lAl&ust=1637756786542000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPD6gta9rvQCFQAAAAAdAAAAABAD"
    },
    gender: {type: String, default: 'male'},
    mobile: {type: String, default: ''},
    address: {type: String, default: ''},
    adhar: {
        type: Number, 
        default: 0
    },
    age: {
        type: Number, 
        default: 0
    },
    height: {
        type: String, 
        default: ''
    },
    weight: {
        type: Number, 
        default: 0
    },
    isDeleted: { 
        type: Boolean,
        default: false 
    },
    //below entites for patient records
    regNumber: {
        type: String,
        default: ''
    },

    healthHistory: {
        type: String,
        default: ''
    },

    doctorNotes: {
        type: String,
        default: ''
    },

    
    prescription: {
        type: String,
        default: ''
    },

    appointmentDates: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)