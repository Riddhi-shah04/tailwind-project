/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'cyan-blue' : '#112F47',
        'tomato' : '#FF615C',
        'purple' : '#4934A6',
        'blue' : '#4A6173',
        'yellow' : '#FFD670',
        'blushpink' :'#EDE1DF',
        'violet' : '#A32EAD',
        'barleywhite' : '#FFEECD',
        'sand' : '#F5F5F5',
        'shell' : '#D9C3B9',
        'grey' : '#E4E5E5',
      },

      maxWidth : {
        '116px' : '116px', //xx-sm
        '136px' : '136px',
        '138px': '138px', // x-sm
        '146px' : '146px', // sm
        '166px' : '166px', // md
        '170px' : '170px', //lg
        '190px' : '190px', // x-lg
        '234px' : '234px', // xx-lg
        '250px' : '250px', //xl
        '264px' : '264px', //xxl
        '275px' : '275px', //xxxl
        '314px' : '314px',
        '628px' : '628px',
        '678px' : '678px',
      },
      
      minHeight : {
        '50px' : '50px',
      },

      height : {
        '54px' : '54px',
      },

      margin : {
        '46px' : '46px',
        '54px' : '56px',
        '70px' : '70px',
      },

      padding : {
        '52px' : '52px',
        '58px' : '58px',
        '60px' : '60px',
        '84px' : '84px',
        '106px' : '106px',
      },

      fontSize: {
        '3xl' : ['32px', {
          lineHeight: '40px',
          fontWeight: '400',
        }],
        '4xl' : ['48px', {
          lineHeight: '58px',
          fontWeight: '400',
          letterSpacing : '2px',
        }],
        '5xl' : ['56px', {
          lineHeight: '67.2px',
          fontWeight: '400',
        }],
      },

      backgroundImage : {
        'arrow' : "url('../images/arrow.svg')",
      },
    },

    container: {
      padding: '2rem',
      center: true,

      screens: {
        xl: '1240px',
      }
    },

    fontFamily: {
      'lyon' : ['"Lyon"'],
      'soleil' : ['"Soleil"'],
    },
  },
  plugins: [],
}