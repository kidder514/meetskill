import LocalizedString from 'react-localization';

const string = new LocalizedString({
    en:{
        MenuLoginSignup: "Login/Signup",
        LoginDialogHeader: "Login with your email",
        ErrorDialogHeader: "Error",
        ForgotPasswordDialogHeader: "Forgot password ?",
        UnknownDialogHeader: "Unknown",
        LoginWithGoogle: "Continue with Google",
        LoginWithFacebook: "Continue with Facebook",
        FirstName: "First name",
        InputYourFirstName: "Input your first name here",
        LastName: "Last name",
        InputYourLastName: "Input your last name here",        
        Email: "Your email",
        Headline:"Headline",
        InputYourHeadline: "Input your headline here",
        HeadlineHint: "Add a professional headline like, 'Engineer at Udemy' or 'Architect.'",
        ExceedLengthLimit: "It exceeds the maximal limit of characters",
        Password: "Password",
        ConfirmPassword: "Retype your password here.",
        ConfirmNewPassword: "Retype your new password here.",
        ForgotPassword: "Forgot Password?",
        NewPassword: "New Password",
        CurrentPassword:"Current Password",
        EnterEmailToResetPassword:"Enter your Email address to reset your password",
        Biography: "Biography",
        BiographyHint:"Links are not allowed here but are allowed in the link section below. Coupon codes are not permitted. For instructors, your biography should have at least 50 words.",
        Language: "Language",
        Website: "Website",
        WebsiteHint:"Your personal website",
        WebsiteWrongFormat: "The link you entered is not a valid link, please check and re-enter again.",
        GooglePlus: "Google+ profile link",
        GooglePlusUrl:"https://plus.google.com/",
        GooglePlusHint: "Your Google+ profile name",
        Facebook: "Facebook page link",
        FacebookUrl:"http://www.facebook.com/",
        FacebookHint: "Your Facebook username",
        Twitter: "Twitter page link",
        TwitterUrl:"http://twitter.com/",
        TwitterHint: "Your Twitter username",
        Linkedin: "Linkedin profile link",
        LinkedinUrl:"http://www.linkedin.com/",
        LinkedinHint: "Your Linkedin resource id",
        Youtube: "Youtube profile link",
        YoutubeUrl:"http://www.youtube.com/",
        YoutubeHint: "Your Youtube username",
        UploadYourPhoto: "Upload your photo here",
        ImagePreview: "Image Preview",
        PhotoWarning: "Only .png, .jpg and .jpeg files are supported, image with very large size will be compressed, and to make the file uploading prcess fast, image size should be smaller than 1MB.",
        PhotoWrongFormat: 'wrong format, only ".png", ".jpg" and ".jpeg" files are supported',
        ChooseYourFile: "Please select an image as your profile picture",
        SaveCardInfo:"Save your Credit Card information for future purchases",
        ShowProfile: "Show my profile on search engines.",
        ShowCourse: "Show Courses I purchased on my profile page.",
        ReceiveEmail: "I would like to receive Email notifications.",
        Submit: "Submit",
        Delete: "Delete",
        Activate: "Activate",
        Login: "Login",
        Signup: "Sign up",
        Inbox: "Inbox",
        MyCourses: "My Courses",
        MyCart: "My Cart",
        PaymentAndOrder: "Payment & Order",
        Settings: "Settings",
        ResetPassword: "Reset Password",
        MenuCategories:"Categories",
        MenuCategory: "Category",
        MenuBeAnInstructor:"Be an Instructor",
        CreateCourseTitle: "Create a New Course",
        CreateCourseContent: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        CreateNewCourse: "Create New Course",
        Messages:"Messages",
        Help:"Help",
        Wallet:"Wallet",
        Mycourse:"My Courses",
        Notification: "Notifications",
        PurchaseHistory:"Purchase History",
        InstructorDashboard: "Instructor Dashboard",
        AccountViewPublicProfile: "View public Profile",
        AccountMyCourses: "My Courses",
        AccountPhoto: "Photo",        
        AccountProfile: "Profile",
        AccountAccount: "Account",
        AccountSetting: "Settings",
        AccountDelete: "Delete your current account",
        AccountDeleteAccount: "Vanish",
        AccountProfileSubheading: "Add information about yourself to share on your profile.",
        AccountPhotoSubheading: "Add Photo as you avatar",
        AccountAccountSubheading: "Edit your account settings and change your password here.",
        AccountSettingSubheading: "Edit your personal preference here.",
        InputYourCurrentPassword: "Your current password",
        AccountDeleteSubheading: "We're sorry to see you go. Are you sure you want to leave us? If it is a sad 'Yes', please type your password to confirm your action",
        InputNewPassword: "Your new password",
        InputConfirmNewPassword: "Retype your new password",
        LogOut:"Log Out",
        Back: "Back",
        Of: "of",
        Off: "Off",
        Day: "day",
        Days: "days",
        Hours: "hours",
        minutes: "minutes",
        LeftAtThisPrice: " left at this price!",
        BuyNow: "Buy Now",
        AddToCart: "Add to Cart",
        Includes: "Includes",
        OnDemandVideo: "on-demand videoes",
        SupplementalResources: "supplemental resources",
        FullLifetimeAccess: "full lifetime Access",
        AccessonmobileandTV: "Access on mobile and TV",
        StudentsEnrolled: "students enrolled",
        EmailSentToRecoverPassword: "An e-mail containing a link to recover your password has been sent to your email address",
        CreateBy: "created by",
        LastUpdated: "Last Updated",
        PagesInTotal: "pages in total",
        InitializingApp: " Initializing App ...",
        ErrorNotAbleToInitApp: "Unable to initialize the app.",
        ErrorNotAbleToLoadLocation: "Unable to load location from server.",
        ErrorNotAbleToLoadCourse:"Unable to load course from server.",
        ErrorNotAbleToLoadCategory:"Unable to load category from server.",
        ErrorNotAbleToLoadSearchOptions: "Unable to load search options from server.",
        ErrorNotAbleToLogin: "Unable to Login",
        ErrorNotAbleToSignup: "Unable to Sign up", 
        ErrorUnknown: "Unknow error occured",        
        NoFirstName : "Please key in your first name",
        NoLastName: " please key in your last name",
        ErrorNameFormat: 'name can contain alphabets only',
        NoEmail: "Email address shouldn't be empty",
        InvalidEmail: "Your email format is wrong.",
        NoPassword: "Password field shouldn't be empty",
        NoCurrentPassword: "Current Password field shouldn't be empty",
        NoNewPassword: "New Password field shouldn't be empty",
        NoConfirmNewPassword: "please retype your new password here",
        InvalidPassword: "Your password format is wrong, it should be at least 8 characters long containing number and alphabetic letter",
        InvalidNewPassword: "Your new password format is wrong, it should be at least 8 characters long containing number and alphabetic letter",
        NewAndOldPasswordAreSame: "New password you typed is same as your current password",
        InvalidConfirmNewPassword: "The two passwords you entered does not match",
        NoConfirmPassword: "please retype your password here",
        InvalidConfirmPassword: "The two passwords you entered does not match",
        InvalidRecaptcha: "If you are not a robot, tick the box or complete the challenge",
        SearchEnterKeyWord:"Enter a keywork. etc. Math, English.",
        YouAreAlreadyLoggedIn: "You are already logged in",
        NotAbleToChangeEmail: "You can't change your email address once signed up.",
    },
    it: {
    }
});

export default string;