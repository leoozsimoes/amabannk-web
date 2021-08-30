module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': null,
        },
        container: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': null,
        },
        colors: {
            Green: {
                600: '#69B20C',
                300: '#E4F5CE'
            },
            Blue: {
                700: '#384B8C'
            },
            Black:{
                900: '#000'
            }, 
            White: {
                50: '#fff'
            }
        },
        fontFamily: {
            sans: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
        },
        fontSize: {
            'xs': '1.07rem',
            'sm': '1.28rem',
            'tiny': '1.54rem',
            'base': '1.85rem',
            'lg': '2.22rem',
            'xl': '2.66rem',
            '2xl': '3.19rem',
            '3xl': '3.83rem',
            '4xl': '4.6rem',
            '5xl': '5.52rem',
            '6xl': '6rem',
            '7xl': '7.9rem',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
