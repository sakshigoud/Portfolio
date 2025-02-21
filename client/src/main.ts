
const smoothScroll = () => {
    const links = document.querySelectorAll('.navbar a');
    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = (event.target as HTMLAnchorElement).getAttribute('href')?.substring(1);
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                targetElement?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
};


const validateForm = (): boolean => {
    const name = document.getElementById('name') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const message = document.getElementById('message') as HTMLTextAreaElement;

    if (!name.value || !email.value || !message.value) {
        alert('All fields are required!');
        return false;
    }


    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailPattern.test(email.value)) {
        alert('Please enter a valid email address!');
        return false;
    }

    return true;
};


const handleFormSubmit = async (event: Event): Promise<void> => {
    event.preventDefault();
    if (validateForm()) {
        const name = document.getElementById('name') as HTMLInputElement;
        const email = document.getElementById('email') as HTMLInputElement;
        const message = document.getElementById('message') as HTMLTextAreaElement;

        const formData = {
            name: name.value,
            email: email.value,
            message: message.value,
        };


        try {

            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json();

            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                alert('Something went wrong!');
            }
        } catch (error) {
            alert('Something went wrong!');
        }

    }
};

document.addEventListener('DOMContentLoaded', () => {
    smoothScroll();

    const form = document.getElementById('contact-form') as HTMLFormElement;
    form.addEventListener('submit', handleFormSubmit);
});
