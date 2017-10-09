import LocalizedStrings from 'react-localization';

const strings = new LocalizedStrings({
    en:{
        MenuLoginSignup: "Login/Signup",
        MenuCategories:"Cateogories",
        MenuBeAnInstructor:"Be an Instructor",

        ErrorNotAbleToLoadCourses:"Unable to load courses from server.",
        ErrorNotAbleToLoadCategories:"Unable to load categories from server.",
        SearchEnterKeyWord:"Enter a keywork. etc. Math, English."
    },
    it: {
    }
});

export default strings;