import LocalizedString from 'react-localization';

const string = new LocalizedString({
    en:{
        MenuLoginSignup: "Login/Signup",
        MenuCategory:"Cateogories",
        MenuBeAnInstructor:"Be an Instructor",

        ErrorNotAbleToLoadCourse:"Unable to load course from server.",
        ErrorNotAbleToLoadCategory:"Unable to load category from server.",
        SearchEnterKeyWord:"Enter a keywork. etc. Math, English."
    },
    it: {
    }
});

export default string;