const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobListingSchema = new Schema ({
    title : {type: String, required: true},
    description : {type: String, required: true},
    companyId: {type: ObjectId, ref: "Company"},
    location: {type: String, required: true},
    employmentType: {type: String, enum: ["Full-Time","Part-time","Contract"]},
    salaryRange: {
        min: {type: Number, required: true},
        max: {type: Number, required:true}
    },
    skillsRequired: {type: [String]},
    postedAt: {type:Date, default:Date.now},
    expiresAt: {type:Date, required:true}
});

const companySchema = new Schema ({
    name: {type: String, required:true, unique:true},
    website: {type: String},
    description: {type: String},
    industry: {type: String},
    location: {type: String} 
});

const applicationSchema = new Schema ({
    jobId: {type: ObjectId, ref: "Job"},
    applicantId: {type: ObjectId, ref: "User"},
    resumeUrl: {type: String, required:true},
    coverLetter: {type: String},
    status: {type: String, enum:["Pending","Reviewed","Accepted","Rejected"]},
    appliedAt: {type: Date, default: Date.now}
});


const JobListing = mongoose.model('JobListing', jobListingSchema);
const Company = mongoose.model('Company', companySchema);
const Application = mongoose.model('Application', applicationSchema);

module.exports={
    JobListing,
    Company,
    Application
};