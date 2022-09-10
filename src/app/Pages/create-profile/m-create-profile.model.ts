export class mCreateProfile {
    profileId:number=0;
    regId:number=0;
    name:string='';
    qualification:string='';
    designation:string='';
    college:string='';
    address:string='';
    districtId:number=0;
    countryId:number=0;
    country:string='';
    stateId:number=0;
    pincode:number=0;
    mobileNo:string='';
    whatsapp:string='';
    emailId:string='';
    facebook:string='';
    linkedin:string='';
    twitter:string='';
    instagram:string='';
    youtube:string='';
    telegram:string='';
    profilePhotoURL:string='';
    collegeLogoURL:string='';
    resumeURL:string='';
    careerProfile:string='';
    dob:Date;
    profileTypeId:number=0;
    maritalId:number=0;
    maritalStatus:string='';
    languagesKnown:string='';
    hobbies:string='';
}

export class mExperience{
    constructor(
        public experienceId:number=0,
        public regId:number=0,
        public college:string='',
        public designation:string='',
        public from:Date,
        public to:Date,
        public description:string=''
    )
    {}
}

export class mExpertise{
    constructor(
        public expertiseId:number=0,
        public regId:number=0,
        public expertise:string='',
        public description:string=''
    )
    {}
}

export class mMembership{
    constructor(
        public membershipId:number=0,
        public regId:number=0,
        public membership:string='',
        public description:string=''
    )
    {}
}

export class mAwards{
    constructor(
        public awardId:number=0,
        public regId:number=0,
        public award:string='',
        public description:string=''
    )
    {}
}

export class mResearch{
    researchId:number=0;
    regId:number=0;
    researchProfileSubjectId:number=0;
    count:number=0;
}

export class mCertificate{
    certificateId:number=0;
    regId:number=0;
    certificateURL:string='';
}

export class mGallery{
    galleryId:number=0;
    regId:number=0;
    photoURL:string='';
}

export class mDistrict{
    districtId:number=0;
    district:string='';
    stateId:number=0;
}

export class mState{
    stateId:number=0;
    state:string='';
    countryId:number=0;
    isApproved:boolean;
    isDelete:boolean
}
export class mMaritalStatus{
   maritalId:number=0;
   maritalStatus:string='';
}

export class mCountry{
    countryId:number=0;
    countryCode:string='';
    country:string='';
    currencyCode:string='';
    numericCode:number=0;
    currencyIcon:string='';
    isApproved:boolean;
    isDelete:boolean;
}

export class mResearchProfile{
    researchProfileId:number=0;
    researchProfile:string='';
}

export class mResearchProfileSubject{
    researchProfileId:number=0;
    researchProfileSubject:string='';
    researchProfileSubjectId:number=0;
    isCheck:number=0;
    totalCount:number=0;
    isActive:boolean;
}

export class mstProfileType{
    profileTypeId:number =0;
    profileType: string = '';
}

export class TblResearchProfileSubject{
    constructor(
        public researchId:number=0,
        public regId:number=0,
        public researchProfileSubjectId:number=0,
        public totalCount:number=0
    )
    {}
}

export class TableResearchForProfile{
    constructor(
        public regId:number=0,
        public researchProfileSubjectId:number=0,
        public heading:string='',
        public totalCount:number=0,
        public researchProfileId:number=0
    )
    {}
}
export class mQualification{
    qualificationId:number=0;
    qualification:string='';
}
export class mStatus{
    statusId:number=0;
    status:string='';
}

export class mEducationQualification{
    constructor(
    public id:number=0,
    public regId:number=0,
    public college:string='',
    public qualificationId:number=0,
    public qualification:string='',
    public course:string='',
    public score:number=0,
    public yearofPassing:number=0,
    public statusId:number=0,
    public status:string='',       
    ) {}
  }
  export class mExtraCurriculam{
    constructor(
    public activityId:number=0,
    public regId:number=0,	
    public activity:string='',   
    public description:string='',   
    ){}
}  

export class mInternship{
    constructor(
        public internshipId: number = 0,
        public regId:number=0,
        public internship:string='',
        public description:string='',
      ) { }
}