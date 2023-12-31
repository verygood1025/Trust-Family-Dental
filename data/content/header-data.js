var $ = jQuery.noConflict();

const inline_style = `
	.wp-block-button__link {
        color: #fff;
        background-color: #32373c;
        border-radius: 9999px;
        box-shadow: none;
        text-decoration: none;
        padding: calc(.667em + 2px) calc(1.333em + 2px);
        font-size: 1.125em
    }

    .wp-block-file__button {
        background: #32373c;
        color: #fff;
        text-decoration: none
    }
    body {
        --wp--preset--color--black: #000000;
        --wp--preset--color--cyan-bluish-gray: #abb8c3;
        --wp--preset--color--white: #ffffff;
        --wp--preset--color--pale-pink: #f78da7;
        --wp--preset--color--vivid-red: #cf2e2e;
        --wp--preset--color--luminous-vivid-orange: #ff6900;
        --wp--preset--color--luminous-vivid-amber: #fcb900;
        --wp--preset--color--light-green-cyan: #7bdcb5;
        --wp--preset--color--vivid-green-cyan: #00d084;
        --wp--preset--color--pale-cyan-blue: #8ed1fc;
        --wp--preset--color--vivid-cyan-blue: #0693e3;
        --wp--preset--color--vivid-purple: #9b51e0;
        --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);
        --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);
        --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);
        --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);
        --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);
        --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
        --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);
        --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);
        --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);
        --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);
        --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);
        --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
        --wp--preset--font-size--small: 13px;
        --wp--preset--font-size--medium: 20px;
        --wp--preset--font-size--large: 36px;
        --wp--preset--font-size--x-large: 42px;
        --wp--preset--spacing--20: 0.44rem;
        --wp--preset--spacing--30: 0.67rem;
        --wp--preset--spacing--40: 1rem;
        --wp--preset--spacing--50: 1.5rem;
        --wp--preset--spacing--60: 2.25rem;
        --wp--preset--spacing--70: 3.38rem;
        --wp--preset--spacing--80: 5.06rem;
        --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
        --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
        --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
        --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);
        --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
    }

    :where(.is-layout-flex) {
        gap: 0.5em;
    }

    :where(.is-layout-grid) {
        gap: 0.5em;
    }

    body .is-layout-flow>.alignleft {
        float: left;
        margin-inline-start: 0;
        margin-inline-end: 2em;
    }

    body .is-layout-flow>.alignright {
        float: right;
        margin-inline-start: 2em;
        margin-inline-end: 0;
    }

    body .is-layout-flow>.aligncenter {
        margin-left: auto !important;
        margin-right: auto !important;
    }

    body .is-layout-constrained>.alignleft {
        float: left;
        margin-inline-start: 0;
        margin-inline-end: 2em;
    }

    body .is-layout-constrained>.alignright {
        float: right;
        margin-inline-start: 2em;
        margin-inline-end: 0;
    }

    body .is-layout-constrained>.aligncenter {
        margin-left: auto !important;
        margin-right: auto !important;
    }

    body .is-layout-constrained> :where(:not(.alignleft):not(.alignright):not(.alignfull)) {
        max-width: var(--wp--style--global--content-size);
        margin-left: auto !important;
        margin-right: auto !important;
    }

    body .is-layout-constrained>.alignwide {
        max-width: var(--wp--style--global--wide-size);
    }

    body .is-layout-flex {
        display: flex;
    }

    body .is-layout-flex {
        flex-wrap: wrap;
        align-items: center;
    }

    body .is-layout-flex>* {
        margin: 0;
    }

    body .is-layout-grid {
        display: grid;
    }

    body .is-layout-grid>* {
        margin: 0;
    }

    :where(.wp-block-columns.is-layout-flex) {
        gap: 2em;
    }

    :where(.wp-block-columns.is-layout-grid) {
        gap: 2em;
    }

    :where(.wp-block-post-template.is-layout-flex) {
        gap: 1.25em;
    }

    :where(.wp-block-post-template.is-layout-grid) {
        gap: 1.25em;
    }

    .has-black-color {
        color: var(--wp--preset--color--black) !important;
    }

    .has-cyan-bluish-gray-color {
        color: var(--wp--preset--color--cyan-bluish-gray) !important;
    }

    .has-white-color {
        color: var(--wp--preset--color--white) !important;
    }

    .has-pale-pink-color {
        color: var(--wp--preset--color--pale-pink) !important;
    }

    .has-vivid-red-color {
        color: var(--wp--preset--color--vivid-red) !important;
    }

    .has-luminous-vivid-orange-color {
        color: var(--wp--preset--color--luminous-vivid-orange) !important;
    }

    .has-luminous-vivid-amber-color {
        color: var(--wp--preset--color--luminous-vivid-amber) !important;
    }

    .has-light-green-cyan-color {
        color: var(--wp--preset--color--light-green-cyan) !important;
    }

    .has-vivid-green-cyan-color {
        color: var(--wp--preset--color--vivid-green-cyan) !important;
    }

    .has-pale-cyan-blue-color {
        color: var(--wp--preset--color--pale-cyan-blue) !important;
    }

    .has-vivid-cyan-blue-color {
        color: var(--wp--preset--color--vivid-cyan-blue) !important;
    }

    .has-vivid-purple-color {
        color: var(--wp--preset--color--vivid-purple) !important;
    }

    .has-black-background-color {
        background-color: var(--wp--preset--color--black) !important;
    }

    .has-cyan-bluish-gray-background-color {
        background-color: var(--wp--preset--color--cyan-bluish-gray) !important;
    }

    .has-white-background-color {
        background-color: var(--wp--preset--color--white) !important;
    }

    .has-pale-pink-background-color {
        background-color: var(--wp--preset--color--pale-pink) !important;
    }

    .has-vivid-red-background-color {
        background-color: var(--wp--preset--color--vivid-red) !important;
    }

    .has-luminous-vivid-orange-background-color {
        background-color: var(--wp--preset--color--luminous-vivid-orange) !important;
    }

    .has-luminous-vivid-amber-background-color {
        background-color: var(--wp--preset--color--luminous-vivid-amber) !important;
    }

    .has-light-green-cyan-background-color {
        background-color: var(--wp--preset--color--light-green-cyan) !important;
    }

    .has-vivid-green-cyan-background-color {
        background-color: var(--wp--preset--color--vivid-green-cyan) !important;
    }

    .has-pale-cyan-blue-background-color {
        background-color: var(--wp--preset--color--pale-cyan-blue) !important;
    }

    .has-vivid-cyan-blue-background-color {
        background-color: var(--wp--preset--color--vivid-cyan-blue) !important;
    }

    .has-vivid-purple-background-color {
        background-color: var(--wp--preset--color--vivid-purple) !important;
    }

    .has-black-border-color {
        border-color: var(--wp--preset--color--black) !important;
    }

    .has-cyan-bluish-gray-border-color {
        border-color: var(--wp--preset--color--cyan-bluish-gray) !important;
    }

    .has-white-border-color {
        border-color: var(--wp--preset--color--white) !important;
    }

    .has-pale-pink-border-color {
        border-color: var(--wp--preset--color--pale-pink) !important;
    }

    .has-vivid-red-border-color {
        border-color: var(--wp--preset--color--vivid-red) !important;
    }

    .has-luminous-vivid-orange-border-color {
        border-color: var(--wp--preset--color--luminous-vivid-orange) !important;
    }

    .has-luminous-vivid-amber-border-color {
        border-color: var(--wp--preset--color--luminous-vivid-amber) !important;
    }

    .has-light-green-cyan-border-color {
        border-color: var(--wp--preset--color--light-green-cyan) !important;
    }

    .has-vivid-green-cyan-border-color {
        border-color: var(--wp--preset--color--vivid-green-cyan) !important;
    }

    .has-pale-cyan-blue-border-color {
        border-color: var(--wp--preset--color--pale-cyan-blue) !important;
    }

    .has-vivid-cyan-blue-border-color {
        border-color: var(--wp--preset--color--vivid-cyan-blue) !important;
    }

    .has-vivid-purple-border-color {
        border-color: var(--wp--preset--color--vivid-purple) !important;
    }

    .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
        background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;
    }

    .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
        background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;
    }

    .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
        background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;
    }

    .has-luminous-vivid-orange-to-vivid-red-gradient-background {
        background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;
    }

    .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
        background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;
    }

    .has-cool-to-warm-spectrum-gradient-background {
        background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;
    }

    .has-blush-light-purple-gradient-background {
        background: var(--wp--preset--gradient--blush-light-purple) !important;
    }

    .has-blush-bordeaux-gradient-background {
        background: var(--wp--preset--gradient--blush-bordeaux) !important;
    }

    .has-luminous-dusk-gradient-background {
        background: var(--wp--preset--gradient--luminous-dusk) !important;
    }

    .has-pale-ocean-gradient-background {
        background: var(--wp--preset--gradient--pale-ocean) !important;
    }

    .has-electric-grass-gradient-background {
        background: var(--wp--preset--gradient--electric-grass) !important;
    }

    .has-midnight-gradient-background {
        background: var(--wp--preset--gradient--midnight) !important;
    }

    .has-small-font-size {
        font-size: var(--wp--preset--font-size--small) !important;
    }

    .has-medium-font-size {
        font-size: var(--wp--preset--font-size--medium) !important;
    }

    .has-large-font-size {
        font-size: var(--wp--preset--font-size--large) !important;
    }

    .has-x-large-font-size {
        font-size: var(--wp--preset--font-size--x-large) !important;
    }

    .wp-block-navigation a:where(:not(.wp-element-button)) {
        color: inherit;
    }

    :where(.wp-block-post-template.is-layout-flex) {
        gap: 1.25em;
    }

    :where(.wp-block-post-template.is-layout-grid) {
        gap: 1.25em;
    }

    :where(.wp-block-columns.is-layout-flex) {
        gap: 2em;
    }

    :where(.wp-block-columns.is-layout-grid) {
        gap: 2em;
    }

    .wp-block-pullquote {
        font-size: 1.5em;
        line-height: 1.6;
    }
    </style>
    <link rel='stylesheet' id='contact-form-7-css' href='https://trustfamilydental.com/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.8.4' type='text/css' media='all' />
    <link rel='stylesheet' id='mfn-be-css' href='../data/css/be.css?ver=25.0.2' type='text/css' media='all' />
    <link rel='stylesheet' id='mfn-animations-css' href='https://trustfamilydental.com/wp-content/themes/betheme/assets/animations/animations.min.css?ver=25.0.2' type='text/css' media='all' />
    <link rel='stylesheet' id='mfn-font-awesome-css' href='https://trustfamilydental.com/wp-content/themes/betheme/fonts/fontawesome/fontawesome.css?ver=25.0.2' type='text/css' media='all' />
    <link rel='stylesheet' id='mfn-jplayer-css' href='https://trustfamilydental.com/wp-content/themes/betheme/assets/jplayer/css/jplayer.blue.monday.css?ver=25.0.2' type='text/css' media='all' />
    <link rel='stylesheet' id='mfn-responsive-css' href='../data/css/responsive.css?ver=25.0.2' type='text/css' media='all' />
    <link rel='stylesheet' id='mfn-fonts-css' href='https://fonts.googleapis.com/css?family=Poppins%3A300%2C400%2C400italic%2C500%2C600%2C700%2C700italic&#038;display=swap&#038;ver=6.4.2' type='text/css' media='all' />
    <style id='mfn-dynamic-inline-css' type='text/css'>
    html {
        background-color: #fff;
    }

    #Wrapper,
    #Content {
        background-color: #fff;
    }

    body:not(.template-slider) #Header {
        min-height: 250px;
    }

    body.header-below:not(.template-slider) #Header {
        padding-top: 250px;
    }

    #Footer .widgets_wrapper {
        padding: 70px 0;
    }

    body,
    button,
    span.date_label,
    .timeline_items li h3 span,
    input[type="submit"],
    input[type="reset"],
    input[type="button"],
    input[type="text"],
    input[type="password"],
    input[type="tel"],
    input[type="email"],
    textarea,
    select,
    .offer_li .title h3 {
        font-family: "Lato", Helvetica, Arial, sans-serif;
    }

    #menu>ul>li>a,
    a.action_button,
    #overlay-menu ul li a {
        font-family: "Montserrat", Helvetica, Arial, sans-serif;
    }

    #Subheader .title {
        font-family: "Montserrat", Helvetica, Arial, sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    .text-logo #logo {
        font-family: "Montserrat", Helvetica, Arial, sans-serif;
    }

    h5,
    h6 {
        font-family: "Montserrat", Helvetica, Arial, sans-serif;
    }

    blockquote {
        font-family: "Poppins", Helvetica, Arial, sans-serif;
    }

    .chart_box .chart .num,
    .counter .desc_wrapper .number-wrapper,
    .how_it_works .image .number,
    .pricing-box .plan-header .price,
    .quick_fact .number-wrapper,
    .woocommerce .product div.entry-summary .price {
        font-family: "Poppins", Helvetica, Arial, sans-serif;
    }

    body {
        font-size: 18px;
        line-height: 1.2;
        font-weight: 300;
        letter-spacing: 0px;
    }

    .big {
        font-size: 17px;
        line-height: 30px;
        font-weight: 400;
        letter-spacing: 0px;
    }

    #menu>ul>li>a,
    a.action_button,
    #overlay-menu ul li a {
        font-size: 17px;
        font-weight: 400;
        letter-spacing: 0px;
    }

    #overlay-menu ul li a {
        line-height: 22.5px;
    }

    #Subheader .title {
        font-size: 50px;
        line-height: 60px;
        font-weight: 400;
        letter-spacing: 0px;
    }

    h1,
    .text-logo #logo {
        font-size: 50px;
        line-height: 60px;
        font-weight: 500;
        letter-spacing: 0px;
    }

    h2 {
        font-size: 40px;
        line-height: 50px;
        font-weight: 500;
        letter-spacing: 0px;
    }

    h3,
    .woocommerce ul.products li.product h3 {
        font-size: 30px;
        line-height: 40px;
        font-weight: 400;
        letter-spacing: 0px;
    }

    h4 {
        font-size: 20px;
        line-height: 30px;
        font-weight: 600;
        letter-spacing: 0px;
    }

    h5 {
        font-size: 18px;
        line-height: 30px;
        font-weight: 400;
        letter-spacing: 0px;
    }

    h6 {
        font-size: 15px;
        line-height: 26px;
        font-weight: 700;
        letter-spacing: 0px;
    }

    #Intro .intro-title {
        font-size: 70px;
        line-height: 70px;
        font-weight: 400;
        letter-spacing: 0px;
    }

    @media only screen and (min-width: 768px) and (max-width: 959px) {
        body {
            font-size: 13px;
            line-height: 24px;
            letter-spacing: 0px;
        }

        .big {
            font-size: 14px;
            line-height: 26px;
            letter-spacing: 0px;
        }

        #menu>ul>li>a,
        a.action_button,
        #overlay-menu ul li a {
            font-size: 13px;
            letter-spacing: 0px;
        }

        #overlay-menu ul li a {
            line-height: 19.5px;
            letter-spacing: 0px;
        }

        #Subheader .title {
            font-size: 43px;
            line-height: 51px;
            letter-spacing: 0px;
        }

        h1,
        .text-logo #logo {
            font-size: 43px;
            line-height: 51px;
            letter-spacing: 0px;
        }

        h2 {
            font-size: 34px;
            line-height: 43px;
            letter-spacing: 0px;
        }

        h3,
        .woocommerce ul.products li.product h3 {
            font-size: 26px;
            line-height: 34px;
            letter-spacing: 0px;
        }

        h4 {
            font-size: 17px;
            line-height: 26px;
            letter-spacing: 0px;
        }

        h5 {
            font-size: 15px;
            line-height: 26px;
            letter-spacing: 0px;
        }

        h6 {
            font-size: 13px;
            line-height: 22px;
            letter-spacing: 0px;
        }

        #Intro .intro-title {
            font-size: 60px;
            line-height: 60px;
            letter-spacing: 0px;
        }

        blockquote {
            font-size: 15px;
        }

        .chart_box .chart .num {
            font-size: 45px;
            line-height: 45px;
        }

        .counter .desc_wrapper .number-wrapper {
            font-size: 45px;
            line-height: 45px;
        }

        .counter .desc_wrapper .title {
            font-size: 14px;
            line-height: 18px;
        }

        .faq .question .title {
            font-size: 14px;
        }

        .fancy_heading .title {
            font-size: 38px;
            line-height: 38px;
        }

        .offer .offer_li .desc_wrapper .title h3 {
            font-size: 32px;
            line-height: 32px;
        }

        .offer_thumb_ul li.offer_thumb_li .desc_wrapper .title h3 {
            font-size: 32px;
            line-height: 32px;
        }

        .pricing-box .plan-header h2 {
            font-size: 27px;
            line-height: 27px;
        }

        .pricing-box .plan-header .price>span {
            font-size: 40px;
            line-height: 40px;
        }

        .pricing-box .plan-header .price sup.currency {
            font-size: 18px;
            line-height: 18px;
        }

        .pricing-box .plan-header .price sup.period {
            font-size: 14px;
            line-height: 14px;
        }

        .quick_fact .number {
            font-size: 80px;
            line-height: 80px;
        }

        .trailer_box .desc h2 {
            font-size: 27px;
            line-height: 27px;
        }

        .widget>h3 {
            font-size: 17px;
            line-height: 20px;
        }
    }

    @media only screen and (min-width: 480px) and (max-width: 767px) {
        body {
            font-size: 13px;
            line-height: 21px;
            letter-spacing: 0px;
        }

        .big {
            font-size: 13px;
            line-height: 23px;
            letter-spacing: 0px;
        }

        #menu>ul>li>a,
        a.action_button,
        #overlay-menu ul li a {
            font-size: 13px;
            letter-spacing: 0px;
        }

        #overlay-menu ul li a {
            line-height: 19.5px;
            letter-spacing: 0px;
        }

        #Subheader .title {
            font-size: 38px;
            line-height: 45px;
            letter-spacing: 0px;
        }

        h1,
        .text-logo #logo {
            font-size: 38px;
            line-height: 45px;
            letter-spacing: 0px;
        }

        h2 {
            font-size: 30px;
            line-height: 38px;
            letter-spacing: 0px;
        }

        h3,
        .woocommerce ul.products li.product h3 {
            font-size: 23px;
            line-height: 30px;
            letter-spacing: 0px;
        }

        h4 {
            font-size: 15px;
            line-height: 23px;
            letter-spacing: 0px;
        }

        h5 {
            font-size: 14px;
            line-height: 23px;
            letter-spacing: 0px;
        }

        h6 {
            font-size: 13px;
            line-height: 20px;
            letter-spacing: 0px;
        }

        #Intro .intro-title {
            font-size: 53px;
            line-height: 53px;
            letter-spacing: 0px;
        }

        blockquote {
            font-size: 14px;
        }

        .chart_box .chart .num {
            font-size: 40px;
            line-height: 40px;
        }

        .counter .desc_wrapper .number-wrapper {
            font-size: 40px;
            line-height: 40px;
        }

        .counter .desc_wrapper .title {
            font-size: 13px;
            line-height: 16px;
        }

        .faq .question .title {
            font-size: 13px;
        }

        .fancy_heading .title {
            font-size: 34px;
            line-height: 34px;
        }

        .offer .offer_li .desc_wrapper .title h3 {
            font-size: 28px;
            line-height: 28px;
        }

        .offer_thumb_ul li.offer_thumb_li .desc_wrapper .title h3 {
            font-size: 28px;
            line-height: 28px;
        }

        .pricing-box .plan-header h2 {
            font-size: 24px;
            line-height: 24px;
        }

        .pricing-box .plan-header .price>span {
            font-size: 34px;
            line-height: 34px;
        }

        .pricing-box .plan-header .price sup.currency {
            font-size: 16px;
            line-height: 16px;
        }

        .pricing-box .plan-header .price sup.period {
            font-size: 13px;
            line-height: 13px;
        }

        .quick_fact .number {
            font-size: 70px;
            line-height: 70px;
        }

        .trailer_box .desc h2 {
            font-size: 24px;
            line-height: 24px;
        }

        .widget>h3 {
            font-size: 16px;
            line-height: 19px;
        }
    }

    @media only screen and (max-width: 479px) {
        body {
            font-size: 13px;
            line-height: 19px;
            letter-spacing: 0px;
        }

        .big {
            font-size: 13px;
            line-height: 19px;
            letter-spacing: 0px;
        }

        #menu>ul>li>a,
        a.action_button,
        #overlay-menu ul li a {
            font-size: 13px;
            letter-spacing: 0px;
        }

        #overlay-menu ul li a {
            line-height: 19.5px;
            letter-spacing: 0px;
        }

        #Subheader .title {
            font-size: 30px;
            line-height: 36px;
            letter-spacing: 0px;
        }

        h1,
        .text-logo #logo {
            font-size: 30px;
            line-height: 36px;
            letter-spacing: 0px;
        }

        h2 {
            font-size: 24px;
            line-height: 30px;
            letter-spacing: 0px;
        }

        h3,
        .woocommerce ul.products li.product h3 {
            font-size: 18px;
            line-height: 24px;
            letter-spacing: 0px;
        }

        h4 {
            font-size: 13px;
            line-height: 19px;
            letter-spacing: 0px;
        }

        h5 {
            font-size: 13px;
            line-height: 19px;
            letter-spacing: 0px;
        }

        h6 {
            font-size: 13px;
            line-height: 19px;
            letter-spacing: 0px;
        }

        #Intro .intro-title {
            font-size: 42px;
            line-height: 42px;
            letter-spacing: 0px;
        }

        blockquote {
            font-size: 13px;
        }

        .chart_box .chart .num {
            font-size: 35px;
            line-height: 35px;
        }

        .counter .desc_wrapper .number-wrapper {
            font-size: 35px;
            line-height: 35px;
        }

        .counter .desc_wrapper .title {
            font-size: 13px;
            line-height: 26px;
        }

        .faq .question .title {
            font-size: 13px;
        }

        .fancy_heading .title {
            font-size: 30px;
            line-height: 30px;
        }

        .offer .offer_li .desc_wrapper .title h3 {
            font-size: 26px;
            line-height: 26px;
        }

        .offer_thumb_ul li.offer_thumb_li .desc_wrapper .title h3 {
            font-size: 26px;
            line-height: 26px;
        }

        .pricing-box .plan-header h2 {
            font-size: 21px;
            line-height: 21px;
        }

        .pricing-box .plan-header .price>span {
            font-size: 32px;
            line-height: 32px;
        }

        .pricing-box .plan-header .price sup.currency {
            font-size: 14px;
            line-height: 14px;
        }

        .pricing-box .plan-header .price sup.period {
            font-size: 13px;
            line-height: 13px;
        }

        .quick_fact .number {
            font-size: 60px;
            line-height: 60px;
        }

        .trailer_box .desc h2 {
            font-size: 21px;
            line-height: 21px;
        }

        .widget>h3 {
            font-size: 15px;
            line-height: 18px;
        }
    }

    .with_aside .sidebar.columns {
        width: 23%;
    }

    .with_aside .sections_group {
        width: 77%;
    }

    .aside_both .sidebar.columns {
        width: 18%;
    }

    .aside_both .sidebar.sidebar-1 {
        margin-left: -82%;
    }

    .aside_both .sections_group {
        width: 64%;
        margin-left: 18%;
    }

    @media only screen and (min-width:1240px) {

        #Wrapper,
        .with_aside .content_wrapper {
            max-width: 1240px;
        }

        .section_wrapper,
        .container {
            max-width: 1035px;
        }

        .layout-boxed.header-boxed #Top_bar.is-sticky {
            max-width: 1240px;
        }
    }

    @media only screen and (max-width: 767px) {

        .section_wrapper,
        .container,
        .four.columns .widget-area {
            max-width: 480px !important;
        }
    }

    .button-default .button,
    .button-flat .button,
    .button-round .button {
        background-color: #f7f7f7;
        color: #747474;
    }

    .button-stroke .button {
        border-color: #f7f7f7;
        color: #747474;
    }

    .button-stroke .button:hover {
        background-color: #f7f7f7;
        color: #fff;
    }

    .button-default .button_theme,
    .button-default button,
    .button-default input[type="button"],
    .button-default input[type="reset"],
    .button-default input[type="submit"],
    .button-flat .button_theme,
    .button-flat button,
    .button-flat input[type="button"],
    .button-flat input[type="reset"],
    .button-flat input[type="submit"],
    .button-round .button_theme,
    .button-round button,
    .button-round input[type="button"],
    .button-round input[type="reset"],
    .button-round input[type="submit"],
    .woocommerce #respond input#submit,
    .woocommerce a.button:not(.default),
    .woocommerce button.button,
    .woocommerce input.button,
    .woocommerce #respond input#submit:hover,
    .woocommerce a.button:hover,
    .woocommerce button.button:hover,
    .woocommerce input.button:hover {
        color: #ffffff;
    }

    .button-stroke .button_theme:hover,
    .button-stroke button:hover,
    .button-stroke input[type="submit"]:hover,
    .button-stroke input[type="reset"]:hover,
    .button-stroke input[type="button"]:hover,
    .button-stroke .woocommerce #respond input#submit:hover,
    .button-stroke .woocommerce a.button:not(.default):hover,
    .button-stroke .woocommerce button.button:hover,
    .button-stroke.woocommerce input.button:hover {
        color: #ffffff !important;
    }

    .button-stroke .button_theme:hover .button_icon i {
        color: #ffffff !important;
    }

    .button-default .single_add_to_cart_button,
    .button-flat .single_add_to_cart_button,
    .button-round .single_add_to_cart_button,
    .button-default .woocommerce .button:disabled,
    .button-flat .woocommerce .button:disabled,
    .button-round .woocommerce .button:disabled,
    .button-default .woocommerce .button.alt .button-flat .woocommerce .button.alt,
    .button-round .woocommerce .button.alt,
    .button-default a.remove,
    .button-flat a.remove,
    .button-round a.remove {
        color: #ffffff !important;
    }

    .action_button,
    .action_button:hover {
        background-color: #0089f7;
        color: #ffffff;
    }

    .button-stroke a.action_button {
        border-color: #0089f7;
    }

    .button-stroke a.action_button:hover {
        background-color: #0089f7 !important;
    }

    .footer_button {
        color: #65666C !important;
        background-color: transparent;
        box-shadow: none !important;
    }

    .footer_button:after {
        display: none !important;
    }

    .button-custom .button,
    .button-custom .action_button,
    .button-custom .footer_button,
    .button-custom button,
    .button-custom input[type="button"],
    .button-custom input[type="reset"],
    .button-custom input[type="submit"],
    .button-custom .woocommerce #respond input#submit,
    .button-custom .woocommerce a.button,
    .button-custom .woocommerce button.button,
    .button-custom .woocommerce input.button {
        font-family: Roboto;
        font-size: 14px;
        line-height: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        padding: 12px 20px 12px 20px;
        border-width: 0px;
        border-radius: 0px;
    }

    .button-custom .button {
        color: #626262;
        background-color: #dbdddf;
        border-color: transparent;
    }

    .button-custom .button:hover {
        color: #626262;
        background-color: #d3d3d3;
        border-color: transparent;
    }

    .button-custom .button_theme,
    .button-custom button,
    .button-custom input[type="button"],
    .button-custom input[type="reset"],
    .button-custom input[type="submit"],
    .button-custom .woocommerce #respond input#submit,
    .button-custom .woocommerce a.button:not(.default),
    .button-custom .woocommerce button.button,
    .button-custom .woocommerce input.button {
        color: #ffffff;
        background-color: #0095eb;
        border-color: transparent;
    }

    .button-custom .button_theme:hover,
    .button-custom button:hover,
    .button-custom input[type="button"]:hover,
    .button-custom input[type="reset"]:hover,
    .button-custom input[type="submit"]:hover,
    .button-custom .woocommerce #respond input#submit:hover,
    .button-custom .woocommerce a.button:not(.default):hover,
    .button-custom .woocommerce button.button:hover,
    .button-custom .woocommerce input.button:hover {
        color: #ffffff;
        background-color: #007cc3;
        border-color: transparent;
    }

    .button-custom .action_button {
        color: #626262;
        background-color: #dbdddf;
        border-color: transparent;
    }

    .button-custom .action_button:hover {
        color: #626262;
        background-color: #d3d3d3;
        border-color: transparent;
    }

    .button-custom .single_add_to_cart_button,
    .button-custom .woocommerce .button:disabled,
    .button-custom .woocommerce .button.alt,
    .button-custom a.remove {
        line-height: 14px !important;
        padding: 12px 20px 12px 20px !important;
        color: #ffffff !important;
        background-color: #0095eb !important;
    }

    .button-custom .single_add_to_cart_button:hover,
    .button-custom .woocommerce .button:disabled:hover,
    .button-custom .woocommerce .button.alt:hover,
    .button-custom a.remove:hover {
        color: #ffffff !important;
        background-color: #007cc3 !important;
    }

    #Top_bar #logo,
    .header-fixed #Top_bar #logo,
    .header-plain #Top_bar #logo,
    .header-transparent #Top_bar #logo {
        height: 90px;
        line-height: 90px;
        padding: 0;
    }

    .logo-overflow #Top_bar:not(.is-sticky) .logo {
        height: 90px;
    }

    #Top_bar .menu>li>a {
        padding: 15px 0;
    }

    .menu-highlight:not(.header-creative) #Top_bar .menu>li>a {
        margin: 20px 0;
    }

    .header-plain:not(.menu-highlight) #Top_bar .menu>li>a span:not(.description) {
        line-height: 90px;
    }

    .header-fixed #Top_bar .menu>li>a {
        padding: 30px 0;
    }

    @media only screen and (max-width: 767px) {
        .mobile-header-mini #Top_bar #logo {
            height: 50px !important;
            line-height: 50px !important;
            margin: 5px 0;
        }
    }

    .twentytwenty-before-label::before {
        content: "Before"
    }

    .twentytwenty-after-label::before {
        content: "After"
    }

    #Side_slide {
        right: -345px;
        width: 345px;
    }

    #Side_slide.left {
        left: -345px;
    }

    .blog-teaser li .desc-wrapper .desc {
        background-position-y: -1px;
    }

    @media only screen and (max-width: 767px) {}

    @media only screen and (min-width: 1240px) {
        body:not(.header-simple) #Top_bar #menu {
            display: block !important
        }

        .tr-menu #Top_bar #menu {
            background: none !important
        }

        #Top_bar .menu>li>ul.mfn-megamenu {
            width: 984px
        }

        #Top_bar .menu>li>ul.mfn-megamenu>li {
            float: left
        }

        #Top_bar .menu>li>ul.mfn-megamenu>li.mfn-megamenu-cols-1 {
            width: 100%
        }

        #Top_bar .menu>li>ul.mfn-megamenu>li.mfn-megamenu-cols-2 {
            width: 50%
        }

        #Top_bar .menu>li>ul.mfn-megamenu>li.mfn-megamenu-cols-3 {
            width: 33.33%
        }

        #Top_bar .menu>li>ul.mfn-megamenu>li.mfn-megamenu-cols-4 {
            width: 25%
        }

        #Top_bar .menu>li>ul.mfn-megamenu>li.mfn-megamenu-cols-5 {
            width: 20%
        }

        #Top_bar .menu>li>ul.mfn-megamenu>li.mfn-megamenu-cols-6 {
            width: 16.66%
        }

        #Top_bar .menu>li>ul.mfn-megamenu>li>ul {
            display: block !important;
            position: inherit;
            left: auto;
            top: auto;
            border-width: 0 1px 0 0
        }

        #Top_bar .menu>li>ul.mfn-megamenu>li:last-child>ul {
            border: 0
        }

        #Top_bar .menu>li>ul.mfn-megamenu>li>ul li {
            width: auto
        }

        #Top_bar .menu>li>ul.mfn-megamenu a.mfn-megamenu-title {
            text-transform: uppercase;
            font-weight: 400;
            background: none
        }

        #Top_bar .menu>li>ul.mfn-megamenu a .menu-arrow {
            display: none
        }

        .menuo-right #Top_bar .menu>li>ul.mfn-megamenu {
            left: auto;
            right: 0
        }

        .menuo-right #Top_bar .menu>li>ul.mfn-megamenu-bg {
            box-sizing: border-box
        }

        #Top_bar .menu>li>ul.mfn-megamenu-bg {
            padding: 20px 166px 20px 20px;
            background-repeat: no-repeat;
            background-position: right bottom
        }

        .rtl #Top_bar .menu>li>ul.mfn-megamenu-bg {
            padding-left: 166px;
            padding-right: 20px;
            background-position: left bottom
        }

        #Top_bar .menu>li>ul.mfn-megamenu-bg>li {
            background: none
        }

        #Top_bar .menu>li>ul.mfn-megamenu-bg>li a {
            border: none
        }

        #Top_bar .menu>li>ul.mfn-megamenu-bg>li>ul {
            background: none !important;
            -webkit-box-shadow: 0 0 0 0;
            -moz-box-shadow: 0 0 0 0;
            box-shadow: 0 0 0 0
        }

        .mm-vertical #Top_bar .container {
            position: relative;
        }

        .mm-vertical #Top_bar .top_bar_left {
            position: static;
        }

        .mm-vertical #Top_bar .menu>li ul {
            box-shadow: 0 0 0 0 transparent !important;
            background-image: none;
        }

        .mm-vertical #Top_bar .menu>li>ul.mfn-megamenu {
            width: 98% !important;
            margin: 0 1%;
            padding: 20px 0;
        }

        .mm-vertical.header-plain #Top_bar .menu>li>ul.mfn-megamenu {
            width: 100% !important;
            margin: 0;
        }

        .mm-vertical #Top_bar .menu>li>ul.mfn-megamenu>li {
            display: table-cell;
            float: none !important;
            width: 10%;
            padding: 0 15px;
            border-right: 1px solid rgba(0, 0, 0, 0.05);
        }

        .mm-vertical #Top_bar .menu>li>ul.mfn-megamenu>li:last-child {
            border-right-width: 0
        }

        .mm-vertical #Top_bar .menu>li>ul.mfn-megamenu>li.hide-border {
            border-right-width: 0
        }

        .mm-vertical #Top_bar .menu>li>ul.mfn-megamenu>li a {
            border-bottom-width: 0;
            padding: 9px 15px;
            line-height: 120%;
        }

        .mm-vertical #Top_bar .menu>li>ul.mfn-megamenu a.mfn-megamenu-title {
            font-weight: 700;
        }

        .rtl .mm-vertical #Top_bar .menu>li>ul.mfn-megamenu>li:first-child {
            border-right-width: 0
        }

        .rtl .mm-vertical #Top_bar .menu>li>ul.mfn-megamenu>li:last-child {
            border-right-width: 1px
        }

        .header-plain:not(.menuo-right) #Header .top_bar_left {
            width: auto !important
        }

        .header-stack.header-center #Top_bar #menu {
            display: inline-block !important
        }

        .header-simple #Top_bar #menu {
            display: none;
            height: auto;
            width: 300px;
            bottom: auto;
            top: 100%;
            right: 1px;
            position: absolute;
            margin: 0
        }

        .header-simple #Header a.responsive-menu-toggle {
            display: block;
            right: 10px
        }

        .header-simple #Top_bar #menu>ul {
            width: 100%;
            float: left
        }

        .header-simple #Top_bar #menu ul li {
            width: 100%;
            padding-bottom: 0;
            border-right: 0;
            position: relative
        }

        .header-simple #Top_bar #menu ul li a {
            padding: 0 20px;
            margin: 0;
            display: block;
            height: auto;
            line-height: normal;
            border: none
        }

        .header-simple #Top_bar #menu ul li a:after {
            display: none
        }

        .header-simple #Top_bar #menu ul li a span {
            border: none;
            line-height: 44px;
            display: inline;
            padding: 0
        }

        .header-simple #Top_bar #menu ul li.submenu .menu-toggle {
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            width: 44px;
            height: 44px;
            line-height: 44px;
            font-size: 30px;
            font-weight: 300;
            text-align: center;
            cursor: pointer;
            color: #444;
            opacity: 0.33;
        }

        .header-simple #Top_bar #menu ul li.submenu .menu-toggle:after {
            content: "+"
        }

        .header-simple #Top_bar #menu ul li.hover>.menu-toggle:after {
            content: "-"
        }

        .header-simple #Top_bar #menu ul li.hover a {
            border-bottom: 0
        }

        .header-simple #Top_bar #menu ul.mfn-megamenu li .menu-toggle {
            display: none
        }

        .header-simple #Top_bar #menu ul li ul {
            position: relative !important;
            left: 0 !important;
            top: 0;
            padding: 0;
            margin: 0 !important;
            width: auto !important;
            background-image: none
        }

        .header-simple #Top_bar #menu ul li ul li {
            width: 100% !important;
            display: block;
            padding: 0;
        }

        .header-simple #Top_bar #menu ul li ul li a {
            padding: 0 20px 0 30px
        }

        .header-simple #Top_bar #menu ul li ul li a .menu-arrow {
            display: none
        }

        .header-simple #Top_bar #menu ul li ul li a span {
            padding: 0
        }

        .header-simple #Top_bar #menu ul li ul li a span:after {
            display: none !important
        }

        .header-simple #Top_bar .menu>li>ul.mfn-megamenu a.mfn-megamenu-title {
            text-transform: uppercase;
            font-weight: 400
        }

        .header-simple #Top_bar .menu>li>ul.mfn-megamenu>li>ul {
            display: block !important;
            position: inherit;
            left: auto;
            top: auto
        }

        .header-simple #Top_bar #menu ul li ul li ul {
            border-left: 0 !important;
            padding: 0;
            top: 0
        }

        .header-simple #Top_bar #menu ul li ul li ul li a {
            padding: 0 20px 0 40px
        }

        .rtl.header-simple #Top_bar #menu {
            left: 1px;
            right: auto
        }

        .rtl.header-simple #Top_bar a.responsive-menu-toggle {
            left: 10px;
            right: auto
        }

        .rtl.header-simple #Top_bar #menu ul li.submenu .menu-toggle {
            left: 0;
            right: auto
        }

        .rtl.header-simple #Top_bar #menu ul li ul {
            left: auto !important;
            right: 0 !important
        }

        .rtl.header-simple #Top_bar #menu ul li ul li a {
            padding: 0 30px 0 20px
        }

        .rtl.header-simple #Top_bar #menu ul li ul li ul li a {
            padding: 0 40px 0 20px
        }

        .menu-highlight #Top_bar .menu>li {
            margin: 0 2px
        }

        .menu-highlight:not(.header-creative) #Top_bar .menu>li>a {
            margin: 20px 0;
            padding: 0;
            -webkit-border-radius: 5px;
            border-radius: 5px
        }

        .menu-highlight #Top_bar .menu>li>a:after {
            display: none
        }

        .menu-highlight #Top_bar .menu>li>a span:not(.description) {
            line-height: 50px
        }

        .menu-highlight #Top_bar .menu>li>a span.description {
            display: none
        }

        .menu-highlight.header-stack #Top_bar .menu>li>a {
            margin: 10px 0 !important
        }

        .menu-highlight.header-stack #Top_bar .menu>li>a span:not(.description) {
            line-height: 40px
        }

        .menu-highlight.header-transparent #Top_bar .menu>li>a {
            margin: 5px 0
        }

        .menu-highlight.header-simple #Top_bar #menu ul li,
        .menu-highlight.header-creative #Top_bar #menu ul li {
            margin: 0
        }

        .menu-highlight.header-simple #Top_bar #menu ul li>a,
        .menu-highlight.header-creative #Top_bar #menu ul li>a {
            -webkit-border-radius: 0;
            border-radius: 0
        }

        .menu-highlight:not(.header-fixed):not(.header-simple) #Top_bar.is-sticky .menu>li>a {
            margin: 10px 0 !important;
            padding: 5px 0 !important
        }

        .menu-highlight:not(.header-fixed):not(.header-simple) #Top_bar.is-sticky .menu>li>a span {
            line-height: 30px !important
        }

        .header-modern.menu-highlight.menuo-right .menu_wrapper {
            margin-right: 20px
        }

        .menu-line-below #Top_bar .menu>li>a:after {
            top: auto;
            bottom: -4px
        }

        .menu-line-below #Top_bar.is-sticky .menu>li>a:after {
            top: auto;
            bottom: -4px
        }

        .menu-line-below-80 #Top_bar:not(.is-sticky) .menu>li>a:after {
            height: 4px;
            left: 10%;
            top: 50%;
            margin-top: 20px;
            width: 80%
        }

        .menu-line-below-80-1 #Top_bar:not(.is-sticky) .menu>li>a:after {
            height: 1px;
            left: 10%;
            top: 50%;
            margin-top: 20px;
            width: 80%
        }

        .menu-link-color #Top_bar .menu>li>a:after {
            display: none !important
        }

        .menu-arrow-top #Top_bar .menu>li>a:after {
            background: none repeat scroll 0 0 rgba(0, 0, 0, 0) !important;
            border-color: #ccc transparent transparent;
            border-style: solid;
            border-width: 7px 7px 0;
            display: block;
            height: 0;
            left: 50%;
            margin-left: -7px;
            top: 0 !important;
            width: 0
        }

        .menu-arrow-top #Top_bar.is-sticky .menu>li>a:after {
            top: 0 !important
        }

        .menu-arrow-bottom #Top_bar .menu>li>a:after {
            background: none !important;
            border-color: transparent transparent #ccc;
            border-style: solid;
            border-width: 0 7px 7px;
            display: block;
            height: 0;
            left: 50%;
            margin-left: -7px;
            top: auto;
            bottom: 0;
            width: 0
        }

        .menu-arrow-bottom #Top_bar.is-sticky .menu>li>a:after {
            top: auto;
            bottom: 0
        }

        .menuo-no-borders #Top_bar .menu>li>a span {
            border-width: 0 !important
        }

        .menuo-no-borders #Header_creative #Top_bar .menu>li>a span {
            border-bottom-width: 0
        }

        .menuo-no-borders.header-plain #Top_bar a#header_cart,
        .menuo-no-borders.header-plain #Top_bar a#search_button,
        .menuo-no-borders.header-plain #Top_bar .wpml-languages,
        .menuo-no-borders.header-plain #Top_bar a.action_button {
            border-width: 0
        }

        .menuo-right #Top_bar .menu_wrapper {
            float: right
        }

        .menuo-right.header-stack:not(.header-center) #Top_bar .menu_wrapper {
            margin-right: 150px
        }

        body.header-creative {
            padding-left: 50px
        }

        body.header-creative.header-open {
            padding-left: 345px
        }

        body.error404,
        body.under-construction,
        body.template-blank,
        body.under-construction.header-rtl.header-creative.header-open {
            padding-left: 0 !important;
            padding-right: 0 !important
        }

        .header-creative.footer-fixed #Footer,
        .header-creative.footer-sliding #Footer,
        .header-creative.footer-stick #Footer.is-sticky {
            box-sizing: border-box;
            padding-left: 50px;
        }

        .header-open.footer-fixed #Footer,
        .header-open.footer-sliding #Footer,
        .header-creative.footer-stick #Footer.is-sticky {
            padding-left: 345px;
        }

        .header-rtl.header-creative.footer-fixed #Footer,
        .header-rtl.header-creative.footer-sliding #Footer,
        .header-rtl.header-creative.footer-stick #Footer.is-sticky {
            padding-left: 0;
            padding-right: 50px;
        }

        .header-rtl.header-open.footer-fixed #Footer,
        .header-rtl.header-open.footer-sliding #Footer,
        .header-rtl.header-creative.footer-stick #Footer.is-sticky {
            padding-right: 345px;
        }

        #Header_creative {
            background-color: #fff;
            position: fixed;
            width: 345px;
            height: 100%;
            left: -345px;
            top: 0;
            z-index: 9002;
        }

        #Header_creative .container {
            width: 100%
        }

        #Header_creative .creative-wrapper {
            opacity: 0;
            margin-right: 50px
        }

        #Header_creative a.creative-menu-toggle {
            display: block;
            width: 34px;
            height: 34px;
            line-height: 34px;
            font-size: 22px;
            text-align: center;
            position: absolute;
            top: 10px;
            right: 8px;
            border-radius: 3px
        }

        #Header_creative #Top_bar {
            position: static;
            width: 100%
        }

        #Header_creative #Top_bar .top_bar_left {
            width: 100% !important;
            float: none
        }

        #Header_creative #Top_bar .logo {
            float: none;
            text-align: center;
            margin: 15px 0
        }

        #Header_creative #Top_bar #menu {
            background-color: transparent
        }

        #Header_creative #Top_bar .menu_wrapper {
            float: none;
            margin: 0 0 30px
        }

        #Header_creative #Top_bar .menu>li {
            width: 100%;
            float: none;
            position: relative
        }

        #Header_creative #Top_bar .menu>li>a {
            padding: 0;
            text-align: center
        }

        #Header_creative #Top_bar .menu>li>a:after {
            display: none
        }

        #Header_creative #Top_bar .menu>li>a span {
            border-right: 0;
            border-bottom-width: 1px;
            line-height: 38px
        }

        #Header_creative #Top_bar .menu li ul {
            left: 100%;
            right: auto;
            top: 0;
            box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.03);
            -webkit-box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.03)
        }

        #Header_creative #Top_bar .menu>li>ul.mfn-megamenu {
            margin: 0;
            width: 700px !important;
        }

        #Header_creative #Top_bar .menu>li>ul.mfn-megamenu>li>ul {
            left: 0
        }

        #Header_creative #Top_bar .menu li ul li a {
            padding-top: 9px;
            padding-bottom: 8px
        }

        #Header_creative #Top_bar .menu li ul li ul {
            top: 0
        }

        #Header_creative #Top_bar .menu>li>a span.description {
            display: block;
            font-size: 13px;
            line-height: 28px !important;
            clear: both
        }

        #Header_creative #Top_bar .top_bar_right {
            width: 100% !important;
            float: none;
            height: auto;
            margin-bottom: 35px;
            text-align: center;
            padding: 0 20px;
            top: 0;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box
        }

        #Header_creative #Top_bar .top_bar_right:before {
            content: none
        }

        #Header_creative #Top_bar .top_bar_right .top_bar_right_wrapper {
            flex-wrap: wrap;
            justify-content: center
        }

        #Header_creative #Top_bar .top_bar_right .top-bar-right-icon,
        #Header_creative #Top_bar .top_bar_right .wpml-languages,
        #Header_creative #Top_bar .top_bar_right .top-bar-right-button,
        #Header_creative #Top_bar .top_bar_right .top-bar-right-input {
            min-height: 30px;
            margin: 5px
        }

        #Header_creative #Top_bar .search_wrapper {
            left: 100%;
            top: auto;
            bottom: 0
        }

        #Header_creative #Top_bar .banner_wrapper {
            display: block;
            text-align: center
        }

        #Header_creative #Top_bar .banner_wrapper img {
            max-width: 100%;
            height: auto;
            display: inline-block
        }

        #Header_creative #Action_bar {
            display: none;
            position: absolute;
            bottom: 0;
            top: auto;
            clear: both;
            padding: 0 20px;
            box-sizing: border-box
        }

        #Header_creative #Action_bar .contact_details {
            text-align: center;
            margin-bottom: 20px
        }

        #Header_creative #Action_bar .contact_details li {
            padding: 0
        }

        #Header_creative #Action_bar .social {
            float: none;
            text-align: center;
            padding: 5px 0 15px
        }

        #Header_creative #Action_bar .social li {
            margin-bottom: 2px
        }

        #Header_creative #Action_bar .social-menu {
            float: none;
            text-align: center
        }

        #Header_creative #Action_bar .social-menu li {
            border-color: rgba(0, 0, 0, .1)
        }

        #Header_creative .social li a {
            color: rgba(0, 0, 0, .5)
        }

        #Header_creative .social li a:hover {
            color: #000
        }

        #Header_creative .creative-social {
            position: absolute;
            bottom: 10px;
            right: 0;
            width: 50px
        }

        #Header_creative .creative-social li {
            display: block;
            float: none;
            width: 100%;
            text-align: center;
            margin-bottom: 5px
        }

        .header-creative .fixed-nav.fixed-nav-prev {
            margin-left: 50px
        }

        .header-creative.header-open .fixed-nav.fixed-nav-prev {
            margin-left: 345px
        }

        .menuo-last #Header_creative #Top_bar .menu li.last ul {
            top: auto;
            bottom: 0
        }

        .header-open #Header_creative {
            left: 0
        }

        .header-open #Header_creative .creative-wrapper {
            opacity: 1;
            margin: 0 !important;
        }

        .header-open #Header_creative .creative-menu-toggle,
        .header-open #Header_creative .creative-social {
            display: none
        }

        .header-open #Header_creative #Action_bar {
            display: block
        }

        body.header-rtl.header-creative {
            padding-left: 0;
            padding-right: 50px
        }

        .header-rtl #Header_creative {
            left: auto;
            right: -200px
        }

        .header-rtl #Header_creative .creative-wrapper {
            margin-left: 50px;
            margin-right: 0
        }

        .header-rtl #Header_creative a.creative-menu-toggle {
            left: 8px;
            right: auto
        }

        .header-rtl #Header_creative .creative-social {
            left: 0;
            right: auto
        }

        .header-rtl #Footer #back_to_top.sticky {
            right: 125px
        }

        .header-rtl #popup_contact {
            right: 70px
        }

        .header-rtl #Header_creative #Top_bar .menu li ul {
            left: auto;
            right: 100%
        }

        .header-rtl #Header_creative #Top_bar .search_wrapper {
            left: auto;
            right: 100%;
        }

        .header-rtl .fixed-nav.fixed-nav-prev {
            margin-left: 0 !important
        }

        .header-rtl .fixed-nav.fixed-nav-next {
            margin-right: 50px
        }

        body.header-rtl.header-creative.header-open {
            padding-left: 0;
            padding-right: 345px !important
        }

        .header-rtl.header-open #Header_creative {
            left: auto;
            right: 0
        }

        .header-rtl.header-open #Footer #back_to_top.sticky {
            right: 325px
        }

        .header-rtl.header-open #popup_contact {
            right: 270px
        }

        .header-rtl.header-open .fixed-nav.fixed-nav-next {
            margin-right: 345px
        }

        #Header_creative.active {
            left: -1px;
        }

        .header-rtl #Header_creative.active {
            left: auto;
            right: -1px;
        }

        #Header_creative.active .creative-wrapper {
            opacity: 1;
            margin: 0
        }

        .header-creative .vc_row[data-vc-full-width] {
            padding-left: 50px
        }

        .header-creative.header-open .vc_row[data-vc-full-width] {
            padding-left: 345px
        }

        .header-open .vc_parallax .vc_parallax-inner {
            left: auto;
            width: calc(100% - 345px);
        }

        .header-open.header-rtl .vc_parallax .vc_parallax-inner {
            left: 0;
            right: auto;
        }

        #Header_creative.scroll {
            height: 100%;
            overflow-y: auto
        }

        #Header_creative.scroll:not(.dropdown) .menu li ul {
            display: none !important
        }

        #Header_creative.scroll #Action_bar {
            position: static
        }

        #Header_creative.dropdown {
            outline: none
        }

        #Header_creative.dropdown #Top_bar .menu_wrapper {
            float: left
        }

        #Header_creative.dropdown #Top_bar #menu ul li {
            position: relative;
            float: left
        }

        #Header_creative.dropdown #Top_bar #menu ul li a:after {
            display: none
        }

        #Header_creative.dropdown #Top_bar #menu ul li a span {
            line-height: 38px;
            padding: 0
        }

        #Header_creative.dropdown #Top_bar #menu ul li.submenu .menu-toggle {
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            width: 38px;
            height: 38px;
            line-height: 38px;
            font-size: 26px;
            font-weight: 300;
            text-align: center;
            cursor: pointer;
            color: #444;
            opacity: 0.33;
        }

        #Header_creative.dropdown #Top_bar #menu ul li.submenu .menu-toggle:after {
            content: "+"
        }

        #Header_creative.dropdown #Top_bar #menu ul li.hover>.menu-toggle:after {
            content: "-"
        }

        #Header_creative.dropdown #Top_bar #menu ul li.hover a {
            border-bottom: 0
        }

        #Header_creative.dropdown #Top_bar #menu ul.mfn-megamenu li .menu-toggle {
            display: none
        }

        #Header_creative.dropdown #Top_bar #menu ul li ul {
            position: relative !important;
            left: 0 !important;
            top: 0;
            padding: 0;
            margin-left: 0 !important;
            width: auto !important;
            background-image: none
        }

        #Header_creative.dropdown #Top_bar #menu ul li ul li {
            width: 100% !important
        }

        #Header_creative.dropdown #Top_bar #menu ul li ul li a {
            padding: 0 10px;
            text-align: center
        }

        #Header_creative.dropdown #Top_bar #menu ul li ul li a .menu-arrow {
            display: none
        }

        #Header_creative.dropdown #Top_bar #menu ul li ul li a span {
            padding: 0
        }

        #Header_creative.dropdown #Top_bar #menu ul li ul li a span:after {
            display: none !important
        }

        #Header_creative.dropdown #Top_bar .menu>li>ul.mfn-megamenu a.mfn-megamenu-title {
            text-transform: uppercase;
            font-weight: 400
        }

        #Header_creative.dropdown #Top_bar .menu>li>ul.mfn-megamenu>li>ul {
            display: block !important;
            position: inherit;
            left: auto;
            top: auto
        }

        #Header_creative.dropdown #Top_bar #menu ul li ul li ul {
            border-left: 0 !important;
            padding: 0;
            top: 0
        }

        #Header_creative {
            transition: left .5s ease-in-out, right .5s ease-in-out;
        }

        #Header_creative .creative-wrapper {
            transition: opacity .5s ease-in-out, margin 0s ease-in-out .5s;
        }

        #Header_creative.active .creative-wrapper {
            transition: opacity .5s ease-in-out, margin 0s ease-in-out;
        }
    }

    @media only screen and (min-width: 1240px) {
        #Top_bar.is-sticky {
            position: fixed !important;
            width: 100%;
            left: 0;
            top: -60px;
            height: 60px;
            z-index: 701;
            background: #fff;
            opacity: .97;
            -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
            -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1)
        }

        .layout-boxed.header-boxed #Top_bar.is-sticky {
            max-width: 1240px;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%)
        }

        #Top_bar.is-sticky .top_bar_left,
        #Top_bar.is-sticky .top_bar_right,
        #Top_bar.is-sticky .top_bar_right:before {
            background: none;
            box-shadow: unset
        }

        #Top_bar.is-sticky .logo {
            width: auto;
            margin: 0 30px 0 20px;
            padding: 0
        }

        #Top_bar.is-sticky #logo,
        #Top_bar.is-sticky .custom-logo-link {
            padding: 5px 0 !important;
            height: 50px !important;
            line-height: 50px !important
        }

        .logo-no-sticky-padding #Top_bar.is-sticky #logo {
            height: 60px !important;
            line-height: 60px !important
        }

        #Top_bar.is-sticky #logo img.logo-main {
            display: none
        }

        #Top_bar.is-sticky #logo img.logo-sticky {
            display: inline;
            max-height: 35px
        }

        .logo-sticky-width-auto #Top_bar.is-sticky #logo img.logo-sticky {
            width: auto
        }

        #Top_bar.is-sticky .menu_wrapper {
            clear: none
        }

        #Top_bar.is-sticky .menu_wrapper .menu>li>a {
            padding: 15px 0
        }

        #Top_bar.is-sticky .menu>li>a,
        #Top_bar.is-sticky .menu>li>a span {
            line-height: 30px
        }

        #Top_bar.is-sticky .menu>li>a:after {
            top: auto;
            bottom: -4px
        }

        #Top_bar.is-sticky .menu>li>a span.description {
            display: none
        }

        #Top_bar.is-sticky .secondary_menu_wrapper,
        #Top_bar.is-sticky .banner_wrapper {
            display: none
        }

        .header-overlay #Top_bar.is-sticky {
            display: none
        }

        .sticky-dark #Top_bar.is-sticky,
        .sticky-dark #Top_bar.is-sticky #menu {
            background: rgba(0, 0, 0, .8)
        }

        .sticky-dark #Top_bar.is-sticky .menu>li:not(.current-menu-item)>a {
            color: #fff
        }

        .sticky-dark #Top_bar.is-sticky .top_bar_right .top-bar-right-icon {
            color: rgba(255, 255, 255, .9)
        }

        .sticky-dark #Top_bar.is-sticky .top_bar_right .top-bar-right-icon svg .path {
            stroke: rgba(255, 255, 255, .9)
        }

        .sticky-dark #Top_bar.is-sticky .wpml-languages a.active,
        .sticky-dark #Top_bar.is-sticky .wpml-languages ul.wpml-lang-dropdown {
            background: rgba(0, 0, 0, 0.1);
            border-color: rgba(0, 0, 0, 0.1)
        }

        .sticky-white #Top_bar.is-sticky,
        .sticky-white #Top_bar.is-sticky #menu {
            background: rgba(255, 255, 255, .8)
        }

        .sticky-white #Top_bar.is-sticky .menu>li:not(.current-menu-item)>a {
            color: #222
        }

        .sticky-white #Top_bar.is-sticky .top_bar_right .top-bar-right-icon {
            color: rgba(0, 0, 0, .8)
        }

        .sticky-white #Top_bar.is-sticky .top_bar_right .top-bar-right-icon svg .path {
            stroke: rgba(0, 0, 0, .8)
        }

        .sticky-white #Top_bar.is-sticky .wpml-languages a.active,
        .sticky-white #Top_bar.is-sticky .wpml-languages ul.wpml-lang-dropdown {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(0, 0, 0, 0.1)
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1240px) {
        .header_placeholder {
            height: 0 !important
        }
    }

    @media only screen and (max-width: 1239.5px) {
        #Top_bar #menu {
            display: none;
            height: auto;
            width: 300px;
            bottom: auto;
            top: 100%;
            right: 1px;
            position: absolute;
            margin: 0
        }

        #Top_bar a.responsive-menu-toggle {
            display: block
        }

        #Top_bar #menu>ul {
            width: 100%;
            float: left
        }

        #Top_bar #menu ul li {
            width: 100%;
            padding-bottom: 0;
            border-right: 0;
            position: relative
        }

        #Top_bar #menu ul li a {
            padding: 0 25px;
            margin: 0;
            display: block;
            height: auto;
            line-height: normal;
            border: none
        }

        #Top_bar #menu ul li a:after {
            display: none
        }

        #Top_bar #menu ul li a span {
            border: none;
            line-height: 44px;
            display: inline;
            padding: 0
        }

        #Top_bar #menu ul li a span.description {
            margin: 0 0 0 5px
        }

        #Top_bar #menu ul li.submenu .menu-toggle {
            display: block;
            position: absolute;
            right: 15px;
            top: 0;
            width: 44px;
            height: 44px;
            line-height: 44px;
            font-size: 30px;
            font-weight: 300;
            text-align: center;
            cursor: pointer;
            color: #444;
            opacity: 0.33;
        }

        #Top_bar #menu ul li.submenu .menu-toggle:after {
            content: "+"
        }

        #Top_bar #menu ul li.hover>.menu-toggle:after {
            content: "-"
        }

        #Top_bar #menu ul li.hover a {
            border-bottom: 0
        }

        #Top_bar #menu ul li a span:after {
            display: none !important
        }

        #Top_bar #menu ul.mfn-megamenu li .menu-toggle {
            display: none
        }

        #Top_bar #menu ul li ul {
            position: relative !important;
            left: 0 !important;
            top: 0;
            padding: 0;
            margin-left: 0 !important;
            width: auto !important;
            background-image: none !important;
            box-shadow: 0 0 0 0 transparent !important;
            -webkit-box-shadow: 0 0 0 0 transparent !important
        }

        #Top_bar #menu ul li ul li {
            width: 100% !important
        }

        #Top_bar #menu ul li ul li a {
            padding: 0 20px 0 35px
        }

        #Top_bar #menu ul li ul li a .menu-arrow {
            display: none
        }

        #Top_bar #menu ul li ul li a span {
            padding: 0
        }

        #Top_bar #menu ul li ul li a span:after {
            display: none !important
        }

        #Top_bar .menu>li>ul.mfn-megamenu a.mfn-megamenu-title {
            text-transform: uppercase;
            font-weight: 400
        }

        #Top_bar .menu>li>ul.mfn-megamenu>li>ul {
            display: block !important;
            position: inherit;
            left: auto;
            top: auto
        }

        #Top_bar #menu ul li ul li ul {
            border-left: 0 !important;
            padding: 0;
            top: 0
        }

        #Top_bar #menu ul li ul li ul li a {
            padding: 0 20px 0 45px
        }

        .rtl #Top_bar #menu {
            left: 1px;
            right: auto
        }

        .rtl #Top_bar a.responsive-menu-toggle {
            left: 20px;
            right: auto
        }

        .rtl #Top_bar #menu ul li.submenu .menu-toggle {
            left: 15px;
            right: auto;
            border-left: none;
            border-right: 1px solid #eee
        }

        .rtl #Top_bar #menu ul li ul {
            left: auto !important;
            right: 0 !important
        }

        .rtl #Top_bar #menu ul li ul li a {
            padding: 0 30px 0 20px
        }

        .rtl #Top_bar #menu ul li ul li ul li a {
            padding: 0 40px 0 20px
        }

        .header-stack .menu_wrapper a.responsive-menu-toggle {
            position: static !important;
            margin: 11px 0 !important
        }

        .header-stack .menu_wrapper #menu {
            left: 0;
            right: auto
        }

        .rtl.header-stack #Top_bar #menu {
            left: auto;
            right: 0
        }

        .header-creative.layout-boxed {
            padding-top: 85px
        }

        .header-creative.layout-full-width #Wrapper {
            padding-top: 60px
        }

        #Header_creative {
            position: fixed;
            width: 100%;
            left: 0 !important;
            top: 0;
            z-index: 1001
        }

        #Header_creative .creative-wrapper {
            display: block !important;
            opacity: 1 !important
        }

        #Header_creative .creative-menu-toggle,
        #Header_creative .creative-social {
            display: none !important;
            opacity: 1 !important
        }

        #Header_creative #Top_bar {
            position: static;
            width: 100%
        }

        #Header_creative #Top_bar .one {
            display: flex
        }

        #Header_creative #Top_bar #logo,
        #Header_creative #Top_bar .custom-logo-link {
            height: 50px;
            line-height: 50px;
            padding: 5px 0
        }

        #Header_creative #Top_bar #logo img.logo-sticky {
            max-height: 40px !important
        }

        #Header_creative #logo img.logo-main {
            display: none
        }

        #Header_creative #logo img.logo-sticky {
            display: inline-block
        }

        .logo-no-sticky-padding #Header_creative #Top_bar #logo {
            height: 60px;
            line-height: 60px;
            padding: 0
        }

        .logo-no-sticky-padding #Header_creative #Top_bar #logo img.logo-sticky {
            max-height: 60px !important
        }

        #Header_creative #Action_bar {
            display: none
        }

        #Header_creative #Top_bar .top_bar_right:before {
            content: none
        }

        #Header_creative.scroll {
            overflow: visible !important
        }
    }

    #Header_wrapper,
    #Intro {
        background-color: #ffffff;
    }

    #Subheader {
        background-color: #ffffff;
    }

    .header-classic #Action_bar,
    .header-fixed #Action_bar,
    .header-plain #Action_bar,
    .header-split #Action_bar,
    .header-stack #Action_bar {
        background-color: #101015;
    }

    #Sliding-top {
        background-color: #545454;
    }

    #Sliding-top a.sliding-top-control {
        border-right-color: #545454;
    }

    #Sliding-top.st-center a.sliding-top-control,
    #Sliding-top.st-left a.sliding-top-control {
        border-top-color: #545454;
    }

    #Footer {
        background-color: #101015;
    }

    .grid .post-item {
        background-color: #FFFFFF;
    }

    .portfolio_group .portfolio-item .desc {
        background-color: #FFFFFF;
    }

    .woocommerce ul.products li.product {
        background-color: transparent;
    }

    body,
    ul.timeline_items,
    .icon_box a .desc,
    .icon_box a:hover .desc,
    .feature_list ul li a,
    .list_item a,
    .list_item a:hover,
    .widget_recent_entries ul li a,
    .flat_box a,
    .flat_box a:hover,
    .story_box .desc,
    .content_slider.carouselul li a .title,
    .content_slider.flat.description ul li .desc,
    .content_slider.flat.description ul li a .desc,
    .post-nav.minimal a i {
        color: #626262;
    }

    .post-nav.minimal a svg {
        fill: #626262;
    }

    .themecolor,
    .opening_hours .opening_hours_wrapper li span,
    .fancy_heading_icon .icon_top,
    .fancy_heading_arrows .icon-right-dir,
    .fancy_heading_arrows .icon-left-dir,
    .fancy_heading_line .title,
    .button-love a.mfn-love,
    .format-link .post-title .icon-link,
    .pager-single>span,
    .pager-single a:hover,
    .widget_meta ul,
    .widget_pages ul,
    .widget_rss ul,
    .widget_mfn_recent_comments ul li:after,
    .widget_archive ul,
    .widget_recent_comments ul li:after,
    .widget_nav_menu ul,
    .woocommerce ul.products li.product .price,
    .shop_slider .shop_slider_ul li .item_wrapper .price,
    .woocommerce-page ul.products li.product .price,
    .widget_price_filter .price_label .from,
    .widget_price_filter .price_label .to,
    .woocommerce ul.product_list_widget li .quantity .amount,
    .woocommerce .product div.entry-summary .price,
    .woocommerce .star-rating span,
    #Error_404 .error_pic i,
    .style-simple #Filters .filters_wrapper ul li a:hover,
    .style-simple #Filters .filters_wrapper ul li.current-cat a,
    .style-simple .quick_fact .title,
    .mfn-cart-holder .mfn-ch-content .mfn-ch-product .woocommerce-Price-amount,
    .woocommerce .comment-form-rating p.stars a:before,
    .wishlist .wishlist-row .price,
    .mfn-wish-button:not(.link) .icon-heart-fa {
        color: #0089F7;
    }

    .themebg,
    #comments .commentlist>li .reply a.comment-reply-link,
    #Filters .filters_wrapper ul li a:hover,
    #Filters .filters_wrapper ul li.current-cat a,
    .fixed-nav .arrow,
    .offer_thumb .slider_pagination a:before,
    .offer_thumb .slider_pagination a.selected:after,
    .pager .pages a:hover,
    .pager .pages a.active,
    .pager .pages span.page-numbers.current,
    .pager-single span:after,
    .portfolio_group.exposure .portfolio-item .desc-inner .line,
    .Recent_posts ul li .desc:after,
    .Recent_posts ul li .photo .c,
    .slider_pagination a.selected,
    .slider_pagination .slick-active a,
    .slider_pagination a.selected:after,
    .slider_pagination .slick-active a:after,
    .testimonials_slider .slider_images,
    .testimonials_slider .slider_images a:after,
    .testimonials_slider .slider_images:before,
    #Top_bar .header-cart-count,
    #Top_bar .header-wishlist-count,
    .widget_categories ul,
    .widget_mfn_menu ul li a:hover,
    .widget_mfn_menu ul li.current-menu-item:not(.current-menu-ancestor)>a,
    .widget_mfn_menu ul li.current_page_item:not(.current_page_ancestor)>a,
    .widget_product_categories ul,
    .widget_recent_entries ul li:after,
    .woocommerce-account table.my_account_orders .order-number a,
    .woocommerce-MyAccount-navigation ul li.is-active a,
    .style-simple .accordion .question:after,
    .style-simple .faq .question:after,
    .style-simple .icon_box .desc_wrapper .title:before,
    .style-simple #Filters .filters_wrapper ul li a:after,
    .style-simple .article_box .desc_wrapper p:after,
    .style-simple .sliding_box .desc_wrapper:after,
    .style-simple .trailer_box:hover .desc,
    .tp-bullets.simplebullets.round .bullet.selected,
    .tp-bullets.simplebullets.round .bullet.selected:after,
    .tparrows.default,
    .tp-bullets.tp-thumbs .bullet.selected:after,
    .woocommerce span.onsale.onsale-label,
    .fake-tabs>ul li a:after,
    .fake-tabs>ul li a .number {
        background-color: #0089F7;
    }

    .Latest_news ul li .photo,
    .Recent_posts.blog_news ul li .photo,
    .style-simple .opening_hours .opening_hours_wrapper li label,
    .style-simple .timeline_items li:hover h3,
    .style-simple .timeline_items li:nth-child(even):hover h3,
    .style-simple .timeline_items li:hover .desc,
    .style-simple .timeline_items li:nth-child(even):hover,
    .style-simple .offer_thumb .slider_pagination a.selected {
        border-color: #0089F7;
    }

    a {
        color: #006edf;
    }

    a:hover {
        color: #0089f7;
    }

    *::-moz-selection {
        background-color: #0089F7;
        color: white;
    }

    *::selection {
        background-color: #0089F7;
        color: white;
    }

    .blockquote p.author span,
    .counter .desc_wrapper .title,
    .article_box .desc_wrapper p,
    .team .desc_wrapper p.subtitle,
    .pricing-box .plan-header p.subtitle,
    .pricing-box .plan-header .price sup.period,
    .chart_box p,
    .fancy_heading .inside,
    .fancy_heading_line .slogan,
    .post-meta,
    .post-meta a,
    .post-footer,
    .post-footer a span.label,
    .pager .pages a,
    .button-love a .label,
    .pager-single a,
    #comments .commentlist>li .comment-author .says,
    .fixed-nav .desc .date,
    .filters_buttons li.label,
    .Recent_posts ul li a .desc .date,
    .widget_recent_entries ul li .post-date,
    .tp_recent_tweets .twitter_time,
    .widget_price_filter .price_label,
    .shop-filters .woocommerce-result-count,
    .woocommerce ul.product_list_widget li .quantity,
    .widget_shopping_cart ul.product_list_widget li dl,
    .product_meta .posted_in,
    .woocommerce .shop_table .product-name .variation>dd,
    .shipping-calculator-button:after,
    .shop_slider .shop_slider_ul li .item_wrapper .price del,
    .woocommerce .product .entry-summary .woocommerce-product-rating .woocommerce-review-link,
    .woocommerce .product.style-default .entry-summary .product_meta .tagged_as,
    .woocommerce .tagged_as,
    .wishlist .sku_wrapper,
    .woocommerce .column_product_rating .woocommerce-review-link,
    .woocommerce #reviews #comments ol.commentlist li .comment-text p.meta .woocommerce-review__verified,
    .woocommerce #reviews #comments ol.commentlist li .comment-text p.meta .woocommerce-review__dash,
    .woocommerce #reviews #comments ol.commentlist li .comment-text p.meta .woocommerce-review__published-date,
    .testimonials_slider .testimonials_slider_ul li .author span,
    .testimonials_slider .testimonials_slider_ul li .author span a,
    .Latest_news ul li .desc_footer,
    .share-simple-wrapper .icons a {
        color: #a8a8a8;
    }

    h1,
    h1 a,
    h1 a:hover,
    .text-logo #logo {
        color: #161922;
    }

    h2,
    h2 a,
    h2 a:hover {
        color: #161922;
    }

    h3,
    h3 a,
    h3 a:hover {
        color: #161922;
    }

    h4,
    h4 a,
    h4 a:hover,
    .style-simple .sliding_box .desc_wrapper h4 {
        color: #161922;
    }

    h5,
    h5 a,
    h5 a:hover {
        color: #5f6271;
    }

    h6,
    h6 a,
    h6 a:hover,
    a.content_link .title {
        color: #161922;
    }

    .woocommerce #respond .comment-reply-title,
    .woocommerce #reviews #comments ol.commentlist li .comment-text p.meta .woocommerce-review__author {
        color: #161922
    }

    .dropcap,
    .highlight:not(.highlight_image) {
        background-color: #0089F7;
    }

    .button-default .button_theme,
    .button-default button,
    .button-default input[type="button"],
    .button-default input[type="reset"],
    .button-default input[type="submit"],
    .button-flat .button_theme,
    .button-flat button,
    .button-flat input[type="button"],
    .button-flat input[type="reset"],
    .button-flat input[type="submit"],
    .button-round .button_theme,
    .button-round button,
    .button-round input[type="button"],
    .button-round input[type="reset"],
    .button-round input[type="submit"],
    .woocommerce #respond input#submit,
    .woocommerce a.button:not(.default),
    .woocommerce button.button,
    .woocommerce input.button,
    .woocommerce #respond input#submit:hover,
    .woocommerce a.button:not(.default):hover,
    .woocommerce button.button:hover,
    .woocommerce input.button:hover {
        background-color: #0089F7;
    }

    .button-stroke .button_theme,
    .button-stroke .button_theme .button_icon i,
    .button-stroke button,
    .button-stroke input[type="submit"],
    .button-stroke input[type="reset"],
    .button-stroke input[type="button"],
    .button-stroke .woocommerce #respond input#submit,
    .button-stroke .woocommerce a.button:not(.default),
    .button-stroke .woocommerce button.button,
    .button-stroke.woocommerce input.button {
        border-color: #0089F7;
        color: #0089F7 !important;
    }

    .button-stroke .button_theme:hover,
    .button-stroke button:hover,
    .button-stroke input[type="submit"]:hover,
    .button-stroke input[type="reset"]:hover,
    .button-stroke input[type="button"]:hover {
        background-color: #0089F7;
    }

    .button-default .single_add_to_cart_button,
    .button-flat .single_add_to_cart_button,
    .button-round .single_add_to_cart_button,
    .button-default .woocommerce .button:disabled,
    .button-flat .woocommerce .button:disabled,
    .button-round .woocommerce .button:disabled,
    .button-default .woocommerce .button.alt,
    .button-flat .woocommerce .button.alt,
    .button-round .woocommerce .button.alt {
        background-color: #0089F7 !important;
    }

    .button-stroke .single_add_to_cart_button:hover,
    .button-stroke #place_order:hover {
        background-color: #0089F7 !important;
    }

    a.mfn-link {
        color: #656B6F;
    }

    a.mfn-link-2 span,
    a:hover.mfn-link-2 span:before,
    a.hover.mfn-link-2 span:before,
    a.mfn-link-5 span,
    a.mfn-link-8:after,
    a.mfn-link-8:before {
        background: #006edf;
    }

    a:hover.mfn-link {
        color: #006edf;
    }

    a.mfn-link-2 span:before,
    a:hover.mfn-link-4:before,
    a:hover.mfn-link-4:after,
    a.hover.mfn-link-4:before,
    a.hover.mfn-link-4:after,
    a.mfn-link-5:before,
    a.mfn-link-7:after,
    a.mfn-link-7:before {
        background: #0089f7;
    }

    a.mfn-link-6:before {
        border-bottom-color: #0089f7;
    }

    .column_column ul,
    .column_column ol,
    .the_content_wrapper:not(.is-elementor) ul,
    .the_content_wrapper:not(.is-elementor) ol {
        color: #737E86;
    }

    hr.hr_color,
    .hr_color hr,
    .hr_dots span {
        color: #0089F7;
        background: #0089F7;
    }

    .hr_zigzag i {
        color: #0089F7;
    }

    .highlight-left:after,
    .highlight-right:after {
        background: #0089F7;
    }

    @media only screen and (max-width: 767px) {

        .highlight-left .wrap:first-child,
        .highlight-right .wrap:last-child {
            background: #0089F7;
        }
    }

    #Header .top_bar_left,
    .header-classic #Top_bar,
    .header-plain #Top_bar,
    .header-stack #Top_bar,
    .header-split #Top_bar,
    .header-fixed #Top_bar,
    .header-below #Top_bar,
    #Header_creative,
    #Top_bar #menu,
    .sticky-tb-color #Top_bar.is-sticky {
        background-color: #3a4146;
    }

    #Top_bar .wpml-languages a.active,
    #Top_bar .wpml-languages ul.wpml-lang-dropdown {
        background-color: #ffffff;
    }

    #Top_bar .top_bar_right:before {
        background-color: #e3e3e3;
    }

    #Header .top_bar_right {
        background-color: #f5f5f5;
    }

    #Top_bar .top_bar_right .top-bar-right-icon,
    #Top_bar .top_bar_right .top-bar-right-icon svg .path {
        color: #333333;
        stroke: #333333;
    }

    #Top_bar .menu>li>a,
    #Top_bar #menu ul li.submenu .menu-toggle {
        color: #ffffff;
    }

    #Top_bar .menu>li.current-menu-item>a,
    #Top_bar .menu>li.current_page_item>a,
    #Top_bar .menu>li.current-menu-parent>a,
    #Top_bar .menu>li.current-page-parent>a,
    #Top_bar .menu>li.current-menu-ancestor>a,
    #Top_bar .menu>li.current-page-ancestor>a,
    #Top_bar .menu>li.current_page_ancestor>a,
    #Top_bar .menu>li.hover>a {
        color: #6487c2;
    }

    #Top_bar .menu>li a:after {
        background: #6487c2;
    }

    .menuo-arrows #Top_bar .menu>li.submenu>a>span:not(.description)::after {
        border-top-color: #ffffff;
    }

    #Top_bar .menu>li.current-menu-item.submenu>a>span:not(.description)::after,
    #Top_bar .menu>li.current_page_item.submenu>a>span:not(.description)::after,
    #Top_bar .menu>li.current-menu-parent.submenu>a>span:not(.description)::after,
    #Top_bar .menu>li.current-page-parent.submenu>a>span:not(.description)::after,
    #Top_bar .menu>li.current-menu-ancestor.submenu>a>span:not(.description)::after,
    #Top_bar .menu>li.current-page-ancestor.submenu>a>span:not(.description)::after,
    #Top_bar .menu>li.current_page_ancestor.submenu>a>span:not(.description)::after,
    #Top_bar .menu>li.hover.submenu>a>span:not(.description)::after {
        border-top-color: #0089F7;
    }

    .menu-highlight #Top_bar #menu>ul>li.current-menu-item>a,
    .menu-highlight #Top_bar #menu>ul>li.current_page_item>a,
    .menu-highlight #Top_bar #menu>ul>li.current-menu-parent>a,
    .menu-highlight #Top_bar #menu>ul>li.current-page-parent>a,
    .menu-highlight #Top_bar #menu>ul>li.current-menu-ancestor>a,
    .menu-highlight #Top_bar #menu>ul>li.current-page-ancestor>a,
    .menu-highlight #Top_bar #menu>ul>li.current_page_ancestor>a,
    .menu-highlight #Top_bar #menu>ul>li.hover>a {
        background: #F2F2F2;
    }

    .menu-arrow-bottom #Top_bar .menu>li>a:after {
        border-bottom-color: #0089F7;
    }

    .menu-arrow-top #Top_bar .menu>li>a:after {
        border-top-color: #0089F7;
    }

    .header-plain #Top_bar .menu>li.current-menu-item>a,
    .header-plain #Top_bar .menu>li.current_page_item>a,
    .header-plain #Top_bar .menu>li.current-menu-parent>a,
    .header-plain #Top_bar .menu>li.current-page-parent>a,
    .header-plain #Top_bar .menu>li.current-menu-ancestor>a,
    .header-plain #Top_bar .menu>li.current-page-ancestor>a,
    .header-plain #Top_bar .menu>li.current_page_ancestor>a,
    .header-plain #Top_bar .menu>li.hover>a,
    .header-plain #Top_bar .wpml-languages:hover,
    .header-plain #Top_bar .wpml-languages ul.wpml-lang-dropdown {
        background: #F2F2F2;
        color: #0089F7;
    }

    .header-plain #Top_bar .top_bar_right .top-bar-right-icon:hover {
        background: #F2F2F2;
    }

    .header-plain #Top_bar,
    .header-plain #Top_bar .menu>li>a span:not(.description),
    .header-plain #Top_bar .top_bar_right .top-bar-right-icon,
    .header-plain #Top_bar .top_bar_right .top-bar-right-button,
    .header-plain #Top_bar .top_bar_right .top-bar-right-input,
    .header-plain #Top_bar .wpml-languages {
        border-color: #F2F2F2;
    }

    #Top_bar .menu>li ul {
        background-color: #F2F2F2;
    }

    #Top_bar .menu>li ul li a {
        color: #5f5f5f;
    }

    #Top_bar .menu>li ul li a:hover,
    #Top_bar .menu>li ul li.hover>a {
        color: #2e2e2e;
    }

    #Top_bar .search_wrapper {
        background: #0089F7;
    }

    #Top_bar .search_wrapper input[type="text"] {
        color: white;
    }

    #Top_bar .search_wrapper input::placeholder {
        color: white;
        opacity: 1;
    }

    #Top_bar .search_wrapper input::-ms-input-placeholder {
        color: white;
    }

    .overlay-menu-toggle {
        color: #0089F7 !important;
        background: transparent;
    }

    #Overlay {
        background: rgba(0, 137, 247, 0.95);
    }

    #overlay-menu ul li a,
    .header-overlay .overlay-menu-toggle.focus {
        color: #FFFFFF;
    }

    #overlay-menu ul li.current-menu-item>a,
    #overlay-menu ul li.current_page_item>a,
    #overlay-menu ul li.current-menu-parent>a,
    #overlay-menu ul li.current-page-parent>a,
    #overlay-menu ul li.current-menu-ancestor>a,
    #overlay-menu ul li.current-page-ancestor>a,
    #overlay-menu ul li.current_page_ancestor>a {
        color: #B1DCFB;
    }

    #Top_bar .responsive-menu-toggle,
    #Header_creative .creative-menu-toggle,
    #Header_creative .responsive-menu-toggle {
        color: #0089F7;
        background: transparent;
    }

    #Side_slide {
        background-color: #191919;
        border-color: #191919;
    }

    #Side_slide,
    #Side_slide #menu ul li.submenu .menu-toggle,
    #Side_slide .search-wrapper input.field,
    #Side_slide a:not(.action_button) {
        color: #A6A6A6;
    }

    #Side_slide .extras .extras-wrapper a svg .path {
        stroke: #A6A6A6;
    }

    #Side_slide #menu ul li.hover>.menu-toggle,
    #Side_slide a.active,
    #Side_slide a:not(.action_button):hover {
        color: #FFFFFF;
    }

    #Side_slide .extras .extras-wrapper a:hover svg .path {
        stroke: #FFFFFF;
    }

    #Side_slide #menu ul li.current-menu-item>a,
    #Side_slide #menu ul li.current_page_item>a,
    #Side_slide #menu ul li.current-menu-parent>a,
    #Side_slide #menu ul li.current-page-parent>a,
    #Side_slide #menu ul li.current-menu-ancestor>a,
    #Side_slide #menu ul li.current-page-ancestor>a,
    #Side_slide #menu ul li.current_page_ancestor>a,
    #Side_slide #menu ul li.hover>a,
    #Side_slide #menu ul li:hover>a {
        color: #FFFFFF;
    }

    #Action_bar .contact_details {
        color: #bbbbbb
    }

    #Action_bar .contact_details a {
        color: #006edf
    }

    #Action_bar .contact_details a:hover {
        color: #0089f7
    }

    #Action_bar .social li a,
    #Header_creative .social li a,
    #Action_bar:not(.creative) .social-menu a {
        color: #bbbbbb
    }

    #Action_bar .social li a:hover,
    #Header_creative .social li a:hover,
    #Action_bar:not(.creative) .social-menu a:hover {
        color: #FFFFFF
    }

    #Subheader .title {
        color: #161922;
    }

    #Subheader ul.breadcrumbs li,
    #Subheader ul.breadcrumbs li a {
        color: rgba(22, 25, 34, 0.6);
    }

    #Footer,
    #Footer .widget_recent_entries ul li a {
        color: #bababa;
    }

    #Footer a {
        color: #d1d1d1;
    }

    #Footer a:hover {
        color: #0089f7;
    }

    #Footer h1,
    #Footer h1 a,
    #Footer h1 a:hover,
    #Footer h2,
    #Footer h2 a,
    #Footer h2 a:hover,
    #Footer h3,
    #Footer h3 a,
    #Footer h3 a:hover,
    #Footer h4,
    #Footer h4 a,
    #Footer h4 a:hover,
    #Footer h5,
    #Footer h5 a,
    #Footer h5 a:hover,
    #Footer h6,
    #Footer h6 a,
    #Footer h6 a:hover {
        color: #ffffff;
    }

    #Footer .themecolor,
    #Footer .widget_meta ul,
    #Footer .widget_pages ul,
    #Footer .widget_rss ul,
    #Footer .widget_mfn_recent_comments ul li:after,
    #Footer .widget_archive ul,
    #Footer .widget_recent_comments ul li:after,
    #Footer .widget_nav_menu ul,
    #Footer .widget_price_filter .price_label .from,
    #Footer .widget_price_filter .price_label .to,
    #Footer .star-rating span {
        color: #0089F7;
    }

    #Footer .themebg,
    #Footer .widget_categories ul,
    #Footer .Recent_posts ul li .desc:after,
    #Footer .Recent_posts ul li .photo .c,
    #Footer .widget_recent_entries ul li:after,
    #Footer .widget_mfn_menu ul li a:hover,
    #Footer .widget_product_categories ul {
        background-color: #0089F7;
    }

    #Footer .Recent_posts ul li a .desc .date,
    #Footer .widget_recent_entries ul li .post-date,
    #Footer .tp_recent_tweets .twitter_time,
    #Footer .widget_price_filter .price_label,
    #Footer .shop-filters .woocommerce-result-count,
    #Footer ul.product_list_widget li .quantity,
    #Footer .widget_shopping_cart ul.product_list_widget li dl {
        color: #a8a8a8;
    }

    #Footer .footer_copy .social li a,
    #Footer .footer_copy .social-menu a {
        color: #65666C;
    }

    #Footer .footer_copy .social li a:hover,
    #Footer .footer_copy .social-menu a:hover {
        color: #FFFFFF;
    }

    #Footer .footer_copy {
        border-top-color: rgba(255, 255, 255, 0.1);
    }

    #Sliding-top,
    #Sliding-top .widget_recent_entries ul li a {
        color: #cccccc;
    }

    #Sliding-top a {
        color: #006edf;
    }

    #Sliding-top a:hover {
        color: #0089f7;
    }

    #Sliding-top h1,
    #Sliding-top h1 a,
    #Sliding-top h1 a:hover,
    #Sliding-top h2,
    #Sliding-top h2 a,
    #Sliding-top h2 a:hover,
    #Sliding-top h3,
    #Sliding-top h3 a,
    #Sliding-top h3 a:hover,
    #Sliding-top h4,
    #Sliding-top h4 a,
    #Sliding-top h4 a:hover,
    #Sliding-top h5,
    #Sliding-top h5 a,
    #Sliding-top h5 a:hover,
    #Sliding-top h6,
    #Sliding-top h6 a,
    #Sliding-top h6 a:hover {
        color: #ffffff;
    }

    #Sliding-top .themecolor,
    #Sliding-top .widget_meta ul,
    #Sliding-top .widget_pages ul,
    #Sliding-top .widget_rss ul,
    #Sliding-top .widget_mfn_recent_comments ul li:after,
    #Sliding-top .widget_archive ul,
    #Sliding-top .widget_recent_comments ul li:after,
    #Sliding-top .widget_nav_menu ul,
    #Sliding-top .widget_price_filter .price_label .from,
    #Sliding-top .widget_price_filter .price_label .to,
    #Sliding-top .star-rating span {
        color: #0089F7;
    }

    #Sliding-top .themebg,
    #Sliding-top .widget_categories ul,
    #Sliding-top .Recent_posts ul li .desc:after,
    #Sliding-top .Recent_posts ul li .photo .c,
    #Sliding-top .widget_recent_entries ul li:after,
    #Sliding-top .widget_mfn_menu ul li a:hover,
    #Sliding-top .widget_product_categories ul {
        background-color: #0089F7;
    }

    #Sliding-top .Recent_posts ul li a .desc .date,
    #Sliding-top .widget_recent_entries ul li .post-date,
    #Sliding-top .tp_recent_tweets .twitter_time,
    #Sliding-top .widget_price_filter .price_label,
    #Sliding-top .shop-filters .woocommerce-result-count,
    #Sliding-top ul.product_list_widget li .quantity,
    #Sliding-top .widget_shopping_cart ul.product_list_widget li dl {
        color: #a8a8a8;
    }

    blockquote,
    blockquote a,
    blockquote a:hover {
        color: #444444;
    }

    .image_frame .image_wrapper .image_links,
    .portfolio_group.masonry-hover .portfolio-item .masonry-hover-wrapper .hover-desc {
        background: rgba(0, 137, 247, 0.8);
    }

    .masonry.tiles .post-item .post-desc-wrapper .post-desc .post-title:after,
    .masonry.tiles .post-item.no-img,
    .masonry.tiles .post-item.format-quote,
    .blog-teaser li .desc-wrapper .desc .post-title:after,
    .blog-teaser li.no-img,
    .blog-teaser li.format-quote {
        background: #0089F7;
    }

    .image_frame .image_wrapper .image_links a {
        color: #ffffff;
    }

    .image_frame .image_wrapper .image_links a:hover {
        background: #ffffff;
        color: #0089F7;
    }

    .image_frame {
        border-color: #f8f8f8;
    }

    .image_frame .image_wrapper .mask::after {
        background: rgba(255, 255, 255, 0.4);
    }

    .sliding_box .desc_wrapper {
        background: #0089F7;
    }

    .sliding_box .desc_wrapper:after {
        border-bottom-color: #0089F7;
    }

    .counter .icon_wrapper i {
        color: #0089F7;
    }

    .quick_fact .number-wrapper {
        color: #0089F7;
    }

    .progress_bars .bars_list li .bar .progress {
        background-color: #0089F7;
    }

    a:hover.icon_bar {
        color: #0089F7 !important;
    }

    a.content_link,
    a:hover.content_link {
        color: #0089F7;
    }

    a.content_link:before {
        border-bottom-color: #0089F7;
    }

    a.content_link:after {
        border-color: #0089F7;
    }

    .get_in_touch,
    .infobox {
        background-color: #0089F7;
    }

    .google-map-contact-wrapper .get_in_touch:after {
        border-top-color: #0089F7;
    }

    .timeline_items li h3:before,
    .timeline_items:after,
    .timeline .post-item:before {
        border-color: #0089F7;
    }

    .how_it_works .image .number {
        background: #0089F7;
    }

    .trailer_box .desc .subtitle,
    .trailer_box.plain .desc .line {
        background-color: #0089F7;
    }

    .trailer_box.plain .desc .subtitle {
        color: #0089F7;
    }

    .icon_box .icon_wrapper,
    .icon_box a .icon_wrapper,
    .style-simple .icon_box:hover .icon_wrapper {
        color: #0089F7;
    }

    .icon_box:hover .icon_wrapper:before,
    .icon_box a:hover .icon_wrapper:before {
        background-color: #0089F7;
    }

    ul.clients.clients_tiles li .client_wrapper:hover:before {
        background: #0089F7;
    }

    ul.clients.clients_tiles li .client_wrapper:after {
        border-bottom-color: #0089F7;
    }

    .list_item.lists_1 .list_left {
        background-color: #0089F7;
    }

    .list_item .list_left {
        color: #0089F7;
    }

    .feature_list ul li .icon i {
        color: #0089F7;
    }

    .feature_list ul li:hover,
    .feature_list ul li:hover a {
        background: #0089F7;
    }

    .ui-tabs .ui-tabs-nav li a,
    .accordion .question .title,
    .faq .question .title,
    table th,
    .fake-tabs>ul li a {
        color: #444444;
    }

    .ui-tabs .ui-tabs-nav li.ui-state-active a,
    .accordion .question.active .title>.acc-icon-plus,
    .accordion .question.active .title>.acc-icon-minus,
    .accordion .question.active .title,
    .faq .question.active .title>.acc-icon-plus,
    .faq .question.active .title,
    .fake-tabs>ul li.active a {
        color: #0089F7;
    }

    .ui-tabs .ui-tabs-nav li.ui-state-active a:after {
        background: #0089F7;
    }

    body.table-hover:not(.woocommerce-page) table tr:hover td {
        background: #0089F7;
    }

    .pricing-box .plan-header .price sup.currency,
    .pricing-box .plan-header .price>span {
        color: #0089F7;
    }

    .pricing-box .plan-inside ul li .yes {
        background: #0089F7;
    }

    .pricing-box-box.pricing-box-featured {
        background: #0089F7;
    }

    input[type="date"],
    input[type="email"],
    input[type="number"],
    input[type="password"],
    input[type="search"],
    input[type="tel"],
    input[type="text"],
    input[type="url"],
    select,
    textarea,
    .woocommerce .quantity input.qty,
    .wp-block-search input[type="search"],
    .dark input[type="email"],
    .dark input[type="password"],
    .dark input[type="tel"],
    .dark input[type="text"],
    .dark select,
    .dark textarea {
        color: #626262;
        background-color: rgba(255, 255, 255, 1);
        border-color: #EBEBEB;
    }

    ::-webkit-input-placeholder {
        color: #929292;
    }

    ::-moz-placeholder {
        color: #929292;
    }

    :-ms-input-placeholder {
        color: #929292;
    }

    input[type="date"]:focus,
    input[type="email"]:focus,
    input[type="number"]:focus,
    input[type="password"]:focus,
    input[type="search"]:focus,
    input[type="tel"]:focus,
    input[type="text"]:focus,
    input[type="url"]:focus,
    select:focus,
    textarea:focus {
        color: #0089F7;
        background-color: rgba(233, 245, 252, 1) !important;
        border-color: #d5e5ee;
    }

    :focus::-webkit-input-placeholder {
        color: #929292;
    }

    :focus::-moz-placeholder {
        color: #929292;
    }

    .woocommerce span.onsale,
    .shop_slider .shop_slider_ul li .item_wrapper span.onsale {
        border-top-color: #0089F7 !important;
    }

    .woocommerce span.onsale i,
    .shop_slider .shop_slider_ul li .item_wrapper span.onsale i {
        color: white;
    }

    .woocommerce .widget_price_filter .ui-slider .ui-slider-handle {
        border-color: #0089F7 !important;
    }

    @media only screen and (min-width: 768px) {
        .header-semi #Top_bar:not(.is-sticky) {
            background-color: rgba(255, 255, 255, 0.8);
        }
    }

    @media only screen and (max-width: 767px) {
        #Top_bar {
            background-color: #ffffff !important;
        }

        #Action_bar {
            background-color: #FFFFFF !important;
        }

        #Action_bar .contact_details {
            color: #222222
        }

        #Action_bar .contact_details a {
            color: #006edf
        }

        #Action_bar .contact_details a:hover {
            color: #0089f7
        }

        #Action_bar .social li a,
        #Action_bar .social-menu a {
            color: #bbbbbb !important
        }

        #Action_bar .social li a:hover,
        #Action_bar .social-menu a:hover {
            color: #777777 !important
        }
    }

    form input.display-none {
        display: none !important
    }
`;

const head = {
	'menu_list' : [
		{
			'menu_title': 'Home',
			'menu_link' : '/option2/',
			'menu_class' : 'menu-item-home current-menu-item current_page_item',
			'menu_child' : []
		},
		{
			'menu_title': 'About',
			'menu_link' : '#',
			'menu_class' : '',
			'menu_child' : []
		},
		{
			'menu_title': 'Services',
			'menu_link' : '#',
			'menu_class' : '',
			'menu_child' : [
				{
					'menu_title': 'General Dentistry',
					'menu_link' : '#',
					'menu_child' : []
				},
				{
					'menu_title': 'Implants',
					'menu_link' : '#',
					'menu_child' : []
				},
			]
		},
		{
			'menu_title': 'Patients',
			'menu_link' : '#',
			'menu_class' : '',
			'menu_child' : []
		},
		{
			'menu_title': 'Contact',
			'menu_link' : '#',
			'menu_class' : '',
			'menu_child' : []
		},
	]
};

const social = [
	{
		'icon' : 'assets/images/fb-icon.png',
		'link' : 'https://www.facebook.com/profile.php?id=100086396437858',
		'class' : 'fb-icon',
		'target' : '_blank',
	},
	{
		'icon' : 'assets/images/yelp-icon.png',
		'link' : 'https://www.yelp.com/biz/trust-family-dental-denver',
		'class' : 'yelp-icon',
		'target' : '_blank',
	},
	{
		'icon' : 'assets/images/ig-icon.png',
		'link' : '#',
		'class' : 'ig-icon',
		'target' : '_blank',
	},
	{
		'icon' : 'assets/images/gg-icon.png',
		'link' : 'https://maps.app.goo.gl/ezMxZYFFDvjxuueo8',
		'class' : 'gg-icon',
		'target' : '_blank',
	},
]

const fixed_social = [
    {
        'icon' : 'assets/images/phone-icon.png',
        'link' : 'tel:+13039352353',
        'title' : 'Call',
        'class' : 'phone-icon show-desk',
        'target' : '',
    },
    {
        'icon' : 'assets/images/emergency-icon.png',
        'link' : '#',
        'title' : 'Emergency',
        'class' : 'emergency-icon show-desk',
        'target' : '_blank',
    },
    {
        'icon' : 'assets/images/phone-mob.png',
        'link' : 'tel:+13039352353',
        'title' : 'Call',
        'class' : 'phone-icon show-mob',
        'target' : '_blank',
    },
    {
        'icon' : 'assets/images/emergency-mob.png',
        'link' : '#',
        'title' : 'Emergency',
        'class' : 'emergency-icon show-mob',
        'target' : '_blank',
    },
    {
        'icon' : 'assets/images/mail-mob.png',
        'link' : 'mailto:denveroffice@trustfamilydental.com',
        'title' : 'Email',
        'class' : 'mail-icon show-mob',
        'target' : '',
    },
    {
        'icon' : 'assets/images/facebook-mob.png',
        'link' : 'https://www.facebook.com/profile.php?id=100086396437858',
        'title' : 'Facebook',
        'class' : 'fb-icon show-mob',
        'target' : '_blank',
    },
]

function header_data(head){
	if($('#menu-main-menu').length > 0){
		let menu_html = '';
		$.each(head.menu_list, function(i, item){
			menu_html += `<li id="menu-item-${i}" class="menu-item menu-item-type-post_type menu-item-object-pag ${item.menu_class ? item.menu_class : ''} ${item.menu_child.length > 0 ? 'menu-item-has-children submenu' : ''}">`;
			menu_html += `<a href="${item.menu_link}"><span>${item.menu_title}</span</a>`;
			if(item.menu_child.length > 0){
				menu_html += '<a class="menu-toggle" href="#" role="link" aria-label="Toggle submenu"></a>';
				menu_html += '<ul class="sub-menu">';
				$.each(item.menu_child,function(j, child_item){
					menu_html += `<li id="menu-item-${i}_${j}" class="menu-item menu-item-type-post_type menu-item-object-page ${child_item.menu_class ? child_item.menu_class : ''}">`;
					menu_html += `<a href="${child_item.menu_link}"><span>${child_item.menu_title}</span</a>`;
					menu_html += '</li>';
				});
				menu_html += '</ul>';
			}
			menu_html += '</li>';
		});
		$('#menu-main-menu').html(menu_html);
	}

	if(social.length > 0){
		let social_html = '';
		$.each(social, function(i, item){
			social_html += `<li class="${item.class}"><a href="${item.link}" target="${item.target}"><img src="${item.icon}"></a></li>`;
		});
		$('#Action_bar .social').html(social_html);
	}

    if($('#Action_bar .social').length > 0){
        let hour_html = `<div class="business-hours">
            <h4>Business Hours</h4>
            <p>Monday - Saturday<br>8:00 am - 6:00 pm</p>
            <p>Sunday: Closed </p>
        </div>`;
        $(hour_html).insertBefore('#Action_bar .social');
    }

	if(inline_style){
		$('#global-styles-inline-css').html(inline_style);
	}
}

$(window).ready(function () {
	header_data(head);
});