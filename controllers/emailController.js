const Email = require("../models/email");
const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  //html file

  const html = `<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
<script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<!DOCTYPE html>
<html>

<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
        @media screen {
            @font-face {
                font-family: "Lato";
                font-style: normal;
                font-weight: 400;
                src: local("Lato Regular"), local("Lato-Regular"),
                    url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format("woff");
            }

            @font-face {
                font-family: "Lato";
                font-style: normal;
                font-weight: 700;
                src: local("Lato Bold"), local("Lato-Bold"),
                    url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format("woff");
            }

            @font-face {
                font-family: "Lato";
                font-style: italic;
                font-weight: 400;
                src: local("Lato Italic"), local("Lato-Italic"),
                    url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format("woff");
            }

            @font-face {
                font-family: "Lato";
                font-style: italic;
                font-weight: 700;
                src: local("Lato Bold Italic"), local("Lato-BoldItalic"),
                    url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format("woff");
            }
        }

        /* CLIENT-SPECIFIC STYLES */
        body,
        table,
        td,
        a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        /* RESET STYLES */
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }

        .iconify {
            margin: 0.5em;
            margin-bottom: 0
        }

        table {
            border-collapse: collapse !important;
        }

        body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
        }

        /* iOS BLUE LINKS */
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .top {
            padding: 40px 10px 40px 10px;
        }

        /* MOBILE STYLES */
        @media screen and (max-width: 600px) {
            h1 {
                font-size: 32px !important;
                line-height: 32px !important;
            }

            .top {
                padding: 0;
            }
        }

        /* ANDROID CENTER FIX */
        div[style*="margin: 16px 0;"] {
            margin: 0 !important;
        }
    </style>
</head>

<body style="
      background-color: #f4f4f4;
      margin: 0 !important;
      padding: 0 !important;
    ">
    <!-- HIDDEN PREHEADER TEXT -->
    <div style="
        display: none;
        font-size: 1px;
        color: #fefefe;
        line-height: 1px;
        font-family: 'Lato', Helvetica, Arial, sans-serif;
        max-height: 0px;
        max-width: 0px;
        opacity: 0;
        overflow: hidden;
      ">
        We're thrilled to have you here! Get ready to dive into your new account.
    </div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <!-- LOGO -->
        <tr>
            <td bgcolor="" align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td align="center" valign="top" class="top" style=""></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td bgcolor="#ffffff" align="center" valign="top" style="
                  padding: 40px 20px 20px 20px;
                  border-radius: 4px 4px 0px 0px;
                  color: #111111;
                  font-family: 'Lato', Helvetica, Arial, sans-serif;
                  font-size: 48px;
                  font-weight: 400;
                  letter-spacing: 4px;
                  line-height: 48px;
                ">
                            <svg width="177" height="32" viewBox="0 0 177 32" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.1028 14.2413C21.7942 14.4586 24.7051 16.5417 24.7051 20.9275C24.7051 25.7478 21.4489 29.0909 15.1103 29.0909H0V0H15.0668C20.4085 0 23.8819 3.16931 23.8819 7.94615C23.8819 11.9409 21.0602 13.8503 19.1051 14.0675V14.2413H19.1028Z"
                                    fill="#2851E7" />
                                <path
                                    d="M4.04266 14.9845L3.88717 14.829C3.16001 14.1018 3.16001 12.9242 3.88717 12.197L9.01844 7.06575C9.74559 6.3386 10.9232 6.3386 11.6504 7.06575L11.8059 7.22125C12.533 7.94841 12.533 9.12604 11.8059 9.8532L8.92468 12.7344L6.67461 14.9845C5.94745 15.7116 4.76982 15.7116 4.04266 14.9845Z"
                                    fill="white" />
                                <path
                                    d="M8.83606 14.5363C9.50605 15.2452 9.74158 15.531 9.74158 15.531H5.27344L5.68275 13.9052L6.19496 13.7085C6.19496 13.7085 8.70114 11.9981 8.92524 12.7344C7.91225 13.8435 8.83606 14.5363 8.83606 14.5363Z"
                                    fill="white" />
                                <path
                                    d="M17.207 14.1064L17.3625 14.2619C18.0897 14.9891 18.0897 16.1667 17.3625 16.8938L12.2312 22.0251C11.5041 22.7523 10.3265 22.7523 9.5993 22.0251L9.44381 21.8696C8.71665 21.1425 8.71665 19.9648 9.44381 19.2377L12.325 16.3565L14.5751 14.1064C15.2999 13.3792 16.4799 13.3792 17.207 14.1064Z"
                                    fill="white" />
                                <path
                                    d="M12.4143 14.5569C11.7443 13.848 11.5088 13.5622 11.5088 13.5622H15.9769L15.5676 15.188L15.0554 15.3846C15.0554 15.3846 12.5492 17.0951 12.3251 16.3588C13.3381 15.2497 12.4143 14.5569 12.4143 14.5569Z"
                                    fill="white" />
                                <path
                                    d="M44.0088 10.1C43.437 9.63538 42.8651 9.29584 42.2933 9.0814C41.7214 8.84908 41.1674 8.73293 40.6313 8.73293C39.9523 8.73293 39.3983 8.89376 38.9694 9.21542C38.5405 9.53709 38.3261 9.95704 38.3261 10.4753C38.3261 10.8327 38.4333 11.1275 38.6477 11.3599C38.8622 11.5922 39.1392 11.7977 39.4787 11.9764C39.8361 12.1372 40.2293 12.2802 40.6581 12.4053C41.1049 12.5304 41.5427 12.6644 41.9716 12.8073C43.6872 13.3792 44.9381 14.1476 45.7244 15.1126C46.5285 16.0597 46.9306 17.3017 46.9306 18.8386C46.9306 19.875 46.7519 20.8132 46.3945 21.6531C46.055 22.493 45.5457 23.2168 44.8666 23.8244C44.2054 24.4141 43.3834 24.8698 42.4005 25.1914C41.4355 25.531 40.3365 25.7007 39.1034 25.7007C36.548 25.7007 34.1802 24.9413 32 23.4223L34.2517 19.187C35.0379 19.884 35.8153 20.4022 36.5837 20.7417C37.3521 21.0813 38.1116 21.251 38.8622 21.251C39.72 21.251 40.3543 21.0545 40.7654 20.6613C41.1943 20.2682 41.4087 19.8214 41.4087 19.3211C41.4087 19.0173 41.3551 18.7581 41.2479 18.5437C41.1406 18.3114 40.9619 18.1059 40.7118 17.9272C40.4616 17.7306 40.131 17.5519 39.72 17.3911C39.3268 17.2302 38.8443 17.0515 38.2725 16.855C37.5934 16.6405 36.9233 16.4082 36.2621 16.158C35.6187 15.89 35.0379 15.5415 34.5197 15.1126C34.0193 14.6837 33.6083 14.1476 33.2867 13.5043C32.9829 12.8431 32.831 12.0121 32.831 11.0114C32.831 10.0107 32.9918 9.1082 33.3135 8.30404C33.653 7.48201 34.1176 6.78507 34.7073 6.21322C35.3149 5.6235 36.0476 5.16781 36.9054 4.84614C37.781 4.52448 38.755 4.36365 39.8272 4.36365C40.8279 4.36365 41.8733 4.50661 42.9634 4.79253C44.0535 5.06059 45.0989 5.46267 46.0996 5.99878L44.0088 10.1Z"
                                    fill="#070F18" />
                                <path
                                    d="M53.5377 11.3867L56.8348 18.6241L60.2659 11.3867H63.3217L66.7528 18.8386L70.2107 11.3867H75.5986L68.4147 25.1378H65.1713L61.7402 17.6055L58.4699 25.1378H55.1728L48.123 11.3867H53.5377Z"
                                    fill="#070F18" />
                                <path
                                    d="M81.0937 18.222C81.0937 18.6688 81.1741 19.0887 81.3349 19.4819C81.4957 19.8572 81.7102 20.1878 81.9782 20.4737C82.2642 20.7596 82.5948 20.983 82.97 21.1438C83.3632 21.3047 83.7831 21.3851 84.2299 21.3851C84.6588 21.3851 85.0609 21.3047 85.4361 21.1438C85.8293 20.983 86.1599 20.7596 86.4279 20.4737C86.7139 20.1878 86.9372 19.8572 87.0981 19.4819C87.2768 19.1066 87.3661 18.7045 87.3661 18.2756C87.3661 17.8468 87.2768 17.4447 87.0981 17.0694C86.9372 16.6763 86.7139 16.3367 86.4279 16.0508C86.1599 15.7649 85.8293 15.5415 85.4361 15.3807C85.0609 15.2198 84.6588 15.1394 84.2299 15.1394C83.7831 15.1394 83.3632 15.2198 82.97 15.3807C82.5948 15.5415 82.2642 15.7649 81.9782 16.0508C81.7102 16.3367 81.4957 16.6673 81.3349 17.0426C81.1741 17.4 81.0937 17.7932 81.0937 18.222ZM87.2053 11.3867H92.0839V25.1378H87.2053V23.6099C86.1688 24.9145 84.766 25.5667 82.9968 25.5667C81.9961 25.5667 81.0758 25.388 80.2359 25.0306C79.396 24.6553 78.6633 24.1371 78.0378 23.4759C77.4124 22.8147 76.921 22.0373 76.5636 21.1438C76.224 20.2503 76.0542 19.2764 76.0542 18.222C76.0542 17.2392 76.224 16.3099 76.5636 15.4343C76.9031 14.5408 77.3767 13.7634 77.9842 13.1022C78.5918 12.441 79.3156 11.9228 80.1555 11.5475C80.9954 11.1543 81.9246 10.9578 82.9432 10.9578C84.6588 10.9578 86.0795 11.5564 87.2053 12.7537V11.3867Z"
                                    fill="#070F18" />
                                <path
                                    d="M106.349 18.3025C106.349 17.8736 106.269 17.4715 106.108 17.0962C105.965 16.7031 105.75 16.3635 105.464 16.0776C105.178 15.7917 104.839 15.5683 104.446 15.4075C104.07 15.2288 103.659 15.1394 103.213 15.1394C102.784 15.1394 102.382 15.2198 102.006 15.3807C101.631 15.5415 101.301 15.7649 101.015 16.0508C100.747 16.3367 100.523 16.6763 100.345 17.0694C100.184 17.4447 100.103 17.8468 100.103 18.2756C100.103 18.7045 100.184 19.1066 100.345 19.4819C100.505 19.8572 100.729 20.1878 101.015 20.4737C101.301 20.7417 101.631 20.9651 102.006 21.1438C102.4 21.3047 102.811 21.3851 103.24 21.3851C103.668 21.3851 104.07 21.3047 104.446 21.1438C104.821 20.983 105.143 20.7596 105.411 20.4737C105.697 20.1878 105.92 19.8572 106.081 19.4819C106.26 19.1066 106.349 18.7135 106.349 18.3025ZM100.237 32H95.3855V11.3867H100.237V12.9146C101.274 11.61 102.686 10.9578 104.473 10.9578C105.455 10.9578 106.367 11.1543 107.207 11.5475C108.064 11.9228 108.806 12.441 109.432 13.1022C110.057 13.7634 110.54 14.5408 110.879 15.4343C111.236 16.3278 111.415 17.2838 111.415 18.3025C111.415 19.3211 111.236 20.2682 110.879 21.1438C110.54 22.0195 110.057 22.7879 109.432 23.4491C108.824 24.1103 108.1 24.6285 107.26 25.0038C106.42 25.3791 105.509 25.5667 104.526 25.5667C102.811 25.5667 101.381 24.977 100.237 23.7976V32Z"
                                    fill="#070F18" />
                                <path
                                    d="M119.89 21.0634H121.043C122.365 21.0634 123.312 20.8936 123.884 20.5541C124.456 20.2146 124.742 19.6695 124.742 18.919C124.742 18.1684 124.456 17.6234 123.884 17.2838C123.312 16.9443 122.365 16.7745 121.043 16.7745H119.89V21.0634ZM119.89 12.861H120.855C122.499 12.861 123.321 12.2087 123.321 10.9042C123.321 9.59963 122.499 8.94737 120.855 8.94737H119.89V12.861ZM114.636 4.92656H122.464C124.322 4.92656 125.734 5.37332 126.699 6.26683C127.664 7.16034 128.146 8.447 128.146 10.1268C128.146 11.1454 127.959 11.9943 127.583 12.6733C127.226 13.3345 126.672 13.8974 125.922 14.3621C126.672 14.505 127.306 14.7284 127.825 15.0322C128.361 15.3181 128.79 15.6755 129.111 16.1044C129.451 16.5333 129.692 17.0158 129.835 17.5519C129.978 18.088 130.05 18.6599 130.05 19.2674C130.05 20.2146 129.88 21.0545 129.54 21.7872C129.219 22.5198 128.754 23.1364 128.146 23.6367C127.557 24.1371 126.833 24.5124 125.975 24.7626C125.117 25.0127 124.152 25.1378 123.08 25.1378H114.636V4.92656Z"
                                    fill="#070F18" />
                                <path
                                    d="M142.792 16.2652C142.632 15.5862 142.301 15.0411 141.801 14.6301C141.3 14.2191 140.693 14.0136 139.978 14.0136C139.227 14.0136 138.611 14.2102 138.128 14.6033C137.664 14.9965 137.369 15.5504 137.244 16.2652H142.792ZM137.11 19.0798C137.11 21.1706 138.092 22.216 140.058 22.216C141.113 22.216 141.908 21.7872 142.444 20.9294H147.135C146.188 24.0746 143.82 25.6471 140.031 25.6471C138.87 25.6471 137.807 25.4774 136.842 25.1378C135.877 24.7804 135.046 24.2801 134.349 23.6367C133.67 22.9934 133.142 22.225 132.767 21.3315C132.392 20.438 132.204 19.4372 132.204 18.3293C132.204 17.1856 132.383 16.158 132.74 15.2466C133.098 14.3174 133.607 13.5311 134.268 12.8878C134.929 12.2444 135.725 11.753 136.654 11.4135C137.601 11.0561 138.664 10.8774 139.844 10.8774C141.005 10.8774 142.051 11.0561 142.98 11.4135C143.909 11.753 144.696 12.2534 145.339 12.9146C145.982 13.5758 146.474 14.3889 146.813 15.3539C147.153 16.301 147.322 17.3732 147.322 18.5705V19.0798H137.11Z"
                                    fill="#070F18" />
                                <path
                                    d="M155.694 15.4343V25.1378H150.842V15.4343H149.234V11.3867H150.842V7.25863H155.694V11.3867H158.455V15.4343H155.694Z"
                                    fill="#070F18" />
                                <path
                                    d="M165.044 18.222C165.044 18.6688 165.124 19.0887 165.285 19.4819C165.446 19.8572 165.66 20.1878 165.928 20.4737C166.214 20.7596 166.545 20.983 166.92 21.1438C167.313 21.3047 167.733 21.3851 168.18 21.3851C168.609 21.3851 169.011 21.3047 169.386 21.1438C169.779 20.983 170.11 20.7596 170.378 20.4737C170.664 20.1878 170.887 19.8572 171.048 19.4819C171.227 19.1066 171.316 18.7045 171.316 18.2756C171.316 17.8468 171.227 17.4447 171.048 17.0694C170.887 16.6763 170.664 16.3367 170.378 16.0508C170.11 15.7649 169.779 15.5415 169.386 15.3807C169.011 15.2198 168.609 15.1394 168.18 15.1394C167.733 15.1394 167.313 15.2198 166.92 15.3807C166.545 15.5415 166.214 15.7649 165.928 16.0508C165.66 16.3367 165.446 16.6673 165.285 17.0426C165.124 17.4 165.044 17.7932 165.044 18.222ZM171.155 11.3867H176.034V25.1378H171.155V23.6099C170.119 24.9145 168.716 25.5667 166.947 25.5667C165.946 25.5667 165.026 25.388 164.186 25.0306C163.346 24.6553 162.613 24.1371 161.988 23.4759C161.362 22.8147 160.871 22.0373 160.514 21.1438C160.174 20.2503 160.004 19.2764 160.004 18.222C160.004 17.2392 160.174 16.3099 160.514 15.4343C160.853 14.5408 161.327 13.7634 161.934 13.1022C162.542 12.441 163.266 11.9228 164.106 11.5475C164.945 11.1543 165.875 10.9578 166.893 10.9578C168.609 10.9578 170.03 11.5564 171.155 12.7537V11.3867Z"
                                    fill="#070F18" />
                            </svg>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td bgcolor="#ffffff" align="left" style="
                  padding: 20px 30px 40px 30px;
                  color: #666666;
                  font-family: 'Lato', Helvetica, Arial, sans-serif;
                  font-size: 18px;
                  font-weight: 400;
                  line-height: 25px;
                ">
                            <p style="text-align: center;">
                                Hey ${req.body.fullname} 👋🏽,
                                <br>
                                <br>
                                we are delighted to have you on our waiting list
                            </p>
                            <br />
                            <p style="text-align: center;">
                                We at SwapBeta are working diligently to make your currency exchange cheaper, faster and
                                easier.
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td align="left">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>

                                    <td bgcolor="#ffffff" align="left"
                                        style="padding: 20px 30px 60px 30px; color: #666666;">
                                        <table border="0" cellspacing="0" cellpadding="0">
                                            <h4 style="text-align: center; color: #000">Problems we are solving</h4>
                                            <br>
                                            <br>
                                            <thead>
                                                <h4>High exchange rate</h4>
                                            </thead>
                                            <br>
                                            <tr>
                                                With the current method of exchanging money, we often lose substantial
                                                sum of money due to high exchange rate whenever we are exchanging money.
                                                We are 8x cheaper than an average nigeria bank
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td bgcolor="#ffffff" align="left"
                                        style="padding: 20px 30px 60px 30px; color: #666666;">
                                        <table border="0" cellspacing="0" cellpadding="0">
                                            <thead>
                                                <h4>Convenience</h4>
                                            </thead>
                                            <br>
                                            <tr>
                                                With the invention of mobile phone, life has been easier, so why do we
                                                still go out of our way to exchange our currency, why include third
                                                party as well, Exchange your currency with ease from the comfort of your
                                                home with just a click of a button
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td bgcolor="#ffffff" align="left"
                                        style="padding: 20px 30px 60px 30px; color: #666666;">
                                        <table border="0" cellspacing="0" cellpadding="0">
                                            <thead>
                                                <h4>Safety</h4>
                                            </thead>
                                            <br>
                                            <tr>
                                                Security is important, on SwapBeta you won't have to interact with
                                                anyone to exchange your money, simply exchange your currency to your
                                                favourite currency quicker and access your money instantly
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <!-- COPY -->
                    <tr>
                        <td bgcolor="#ffffff" style="
                  padding: 0px 30px 20px 30px;
                  color: #666666;
                  font-family: 'Lato', Helvetica, Arial, sans-serif;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 20px;
                  line-height: 28px;
                ">
                            <p style="margin: 0; text-align: center;">
                                We have got something in store for
                            </p>
                            <br />
                            <br>
                            <p style="margin: 0; text-align: center;">
                                Reply to talk to Us. We are always here for you
                            </p>
                            <br>
                            <div style="text-align: center">
                                <span class="iconify" data-icon="ei:sc-facebook" data-inline="false"></span>
                                <a href="https://twitter.com/swapbeta">
                                    <span class="iconify" data-icon="ant-design:twitter-outlined"
                                        data-inline="false"></span></a>
                                <span class="iconify" data-icon="ant-design:instagram-outlined"
                                    data-inline="false"></span>
                            </div>
                            <div style="text-align: center;">
                                <a href="https://www.swapbeta.com" style="font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 16px;         
                  color: #2851E7;" target="_blank" rel="noopener noreferrer">www.swapbeta.com</a>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    </td>
    </tr>
    </table>
</body>

</html>`;
  //check if email has already been added
  const email_exists = await Email.findOne({ email: req.body.email });
  if (email_exists)
    return res.status(400).send("your email has already been added");
  try {
    //create a new email
    const email = new Email({
      email: req.body.email,
      fullname: req.body.fullname,
    });
    //save the new user to the database
    const savedEmail = await email.save();
    //send the mail
    var nodemailer = require("nodemailer");

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "louisnwosu94@gmail.com",
        pass: "gizmolovescoding200",
      },
    });

    var mailOptions = {
      from: "louisnwosu94@gmail.com",
      to: `${req.body.email}`,
      subject: "Anticipate swapBeta",
      html,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    //send back a status msg
    return res.status(200).json(savedEmail);
  } catch (error) {
    //return an error message if any
    return res.status(400).json({ error: error.message });
  }
};
