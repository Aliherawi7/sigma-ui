
export const validationFuncations = {
    nameValidation: (name) => {
        console.log(name)
        return name.length > 2 ? true : false;
    },
    emailValidation: (email) =>{
        let pattern = /([a-z0-9_-]+)@([\da-z-]+)([a-z\.]{2,6})/ig;
        return pattern.test(email)
    },
    dobValidation: (date) => {
        const dateObject = new Date(date);
        const currentDate = new Date();
        return currentDate.getFullYear() - dateObject.getFullYear() >= 18 ? true : false
    }

} 