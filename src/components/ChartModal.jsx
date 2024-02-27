import React from "react";
import TodoList from "./modalprogress/TodoList";
import { FiPlus } from "react-icons/fi";

const ChartModal = ({ inputXOn, inputYOn, setInputxon, setInputyon }) => {
  return (
    <div className="space-y-[10px]">
      <div>
        <label for="" className="font-Inter font-[500] text-[14px] leading-[20px] text-[#101828]">
          Title
        </label>

        <input type="text" placeholder="Write the title of the tile" className="w-full h-[44px] outline-none rounded-[4px] border-[1px] border-[#D0D5DD] px-[14px] py-[10px] mt-1" />
      </div>

      <div>
        <span className="font-Inter font-[500] text-[14px] leading-[20px] text-[#101828]">Select chart type</span>

        <div className="flex items-center gap-[24px] mt-2">
          <button type="button" className="w-[72px] h-[72px] rounded-[4px] border-[#D0D5DD] focus:border-[#0A62E6] hover:border-[#0A62E6] border-[1px] p-[12px]">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 4C2.5 3.44772 2.94772 3 3.5 3H8.5C9.05228 3 9.5 3.44772 9.5 4V45H2.5V4Z" fill="#FD7536" />
              <path d="M14.3125 11.875C14.3125 11.3227 14.7602 10.875 15.3125 10.875H20.3125C20.8648 10.875 21.3125 11.3227 21.3125 11.875V45H14.3125V11.875Z" fill="#3F3F75" />
              <path d="M26.125 19.75C26.125 19.1977 26.5727 18.75 27.125 18.75H32.125C32.6773 18.75 33.125 19.1977 33.125 19.75V45H26.125V19.75Z" fill="#EBC43F" />
              <path d="M37.9375 27.625C37.9375 27.0727 38.3852 26.625 38.9375 26.625H43.9375C44.4898 26.625 44.9375 27.0727 44.9375 27.625V45H37.9375V27.625Z" fill="#875FDE" />
            </svg>
          </button>

          <button type="button" className="w-[72px] h-[72px] rounded-[4px] border-[1px] border-[#D0D5DD] focus:border-[#0A62E6] hover:border-[#0A62E6] p-[12px]">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.5 3C45.0523 3 45.5 3.44772 45.5 4L45.5 9C45.5 9.55228 45.0523 10 44.5 10L3.5 10L3.5 3L44.5 3Z" fill="#FD7536" />
              <path
                d="M36.625 14.8125C37.1773 14.8125 37.625 15.2602 37.625 15.8125L37.625 20.8125C37.625 21.3648 37.1773 21.8125 36.625 21.8125L3.5 21.8125L3.5 14.8125L36.625 14.8125Z"
                fill="#3F3F75"
              />
              <path d="M28.75 26.625C29.3023 26.625 29.75 27.0727 29.75 27.625L29.75 32.625C29.75 33.1773 29.3023 33.625 28.75 33.625L3.5 33.625L3.5 26.625L28.75 26.625Z" fill="#EBC43F" />
              <path
                d="M20.875 38.4375C21.4273 38.4375 21.875 38.8852 21.875 39.4375L21.875 44.4375C21.875 44.9898 21.4273 45.4375 20.875 45.4375L3.5 45.4375L3.5 38.4375L20.875 38.4375Z"
                fill="#875FDE"
              />
            </svg>
          </button>

          <button type="button" className="w-[72px] h-[72px] rounded-[4px] border-[1px] border-[#D0D5DD] focus:border-[#0A62E6] hover:border-[#0A62E6] p-[12px]">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M45 18V6C45 5.20436 44.6839 4.44124 44.1212 3.87876C43.5588 3.31612 42.7956 3 42 3H6C5.20436 3 4.44124 3.31609 3.87876 3.87876C3.31612 4.44124 3 5.2044 3 6V18H45Z"
                fill="#3F3F75"
              />
              <path d="M18 34.5H30V45H18V34.5Z" fill="#875FDE" />
              <path d="M33 21H45V31.5H33V21Z" fill="#EBC43F" />
              <path d="M3 21H15V31.5H3V21Z" fill="#EBC43F" />
              <path d="M18 21H30V31.5H18V21Z" fill="#EBC43F" />
              <path d="M33 34.5V45H42C42.7956 45 43.5588 44.6839 44.1212 44.1212C44.6839 43.5588 45 42.7956 45 42V34.5H33Z" fill="#875FDE" />
              <path d="M15 34.5H3V42C3 42.7956 3.31609 43.5588 3.87876 44.1212C4.44124 44.6839 5.2044 45 6 45H15V34.5Z" fill="#875FDE" />
            </svg>
          </button>

          <button type="button" className="w-[72px] h-[72px] rounded-[4px] border-[1px] border-[#D0D5DD] focus:border-[#0A62E6] hover:border-[#0A62E6] p-[12px]">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.2495 3.01562C18.4871 3.18516 13.9239 4.96955 10.3099 8.07563C6.69601 11.182 4.24633 15.4252 3.36353 20.1084C2.48073 24.7916 3.21681 29.6356 5.45149 33.8444L23.2499 23.5688L23.2495 3.01562Z"
                fill="#EBC43F"
              />
              <path
                d="M6.20312 35.1424C8.73017 39.182 12.5563 42.242 17.0531 43.8188C21.5495 45.3957 26.4487 45.3957 30.9451 43.8188C35.4415 42.2421 39.2679 39.1824 41.7951 35.1424L23.9991 24.8672L6.20312 35.1424Z"
                fill="#875FDE"
              />
              <path
                d="M24.75 3.01562V23.5656L42.5484 33.8408C44.7804 29.632 45.515 24.7888 44.6312 20.1072C43.7476 15.4256 41.2982 11.1836 37.6856 8.07763C34.0728 4.97183 29.5112 3.18683 24.75 3.01562Z"
                fill="#3F3F75"
              />
            </svg>
          </button>

          <button type="button" className="w-[72px] h-[72px] rounded-[4px] border-[1px] border-[#D0D5DD] focus:border-[#0A62E6] hover:border-[#0A62E6] p-[12px]">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.6447 37.4295C19.3903 37.0956 16.3675 35.5922 14.1379 33.1983C11.908 30.8046 10.6222 27.6831 10.5196 24.4131L6.75009 21.8984L3.00977 24.3938C3.11477 29.6418 5.17929 34.661 8.79777 38.4638C12.416 42.2667 17.3262 44.5782 22.5626 44.9438L20.3763 41.6647C20.2941 41.5414 20.2502 41.3966 20.2502 41.2484C20.2502 41.1003 20.2941 40.9555 20.3763 40.8322L22.6447 37.4295Z"
                fill="#3F3F75"
              />
              <path
                d="M23.6057 3.00781C18.3577 3.11281 13.3385 5.17733 9.53566 8.79581C5.7327 12.4141 3.42126 17.3242 3.05566 22.5606L6.33474 20.3744C6.45802 20.2922 6.60287 20.2483 6.75098 20.2483C6.8991 20.2483 7.04395 20.2922 7.16722 20.3744L10.5685 22.6423V22.6425C10.9035 19.3887 12.4074 16.3669 14.8009 14.1377C17.1945 11.9083 20.3153 10.6228 23.5845 10.5194L26.0999 6.74849L23.6057 3.00781Z"
                fill="#FD7536"
              />
              <path
                d="M25.438 3.05469L27.6242 6.33377C27.7064 6.45705 27.7503 6.60189 27.7503 6.75001C27.7503 6.89812 27.7064 7.04298 27.6242 7.16625L25.3555 10.569C28.6094 10.9031 31.6319 12.4066 33.8615 14.8002C36.091 17.1938 37.3765 20.3151 37.4793 23.5847L41.2502 26.1001L44.9905 23.6072C44.8861 18.3588 42.8217 13.3392 39.2033 9.53557C35.5849 5.73197 30.6745 3.42037 25.4377 3.05477L25.438 3.05469Z"
                fill="#875FDE"
              />
              <path
                d="M41.2476 27.7463C41.0995 27.7463 40.9546 27.7025 40.8313 27.6203L37.4285 25.3516C37.0945 28.6055 35.591 31.628 33.1973 33.8576C30.8037 36.0871 27.6825 37.3726 24.4129 37.4754L21.8975 41.2463L24.3904 44.9866C29.6384 44.8816 34.6576 42.8171 38.4604 39.1986C42.2632 35.5803 44.5748 30.6702 44.9404 25.4338L41.6613 27.62H41.6615C41.5388 27.7018 41.3948 27.7455 41.2474 27.746L41.2476 27.7463Z"
                fill="#EBC43F"
              />
            </svg>
          </button>

          <button type="button" className="w-[72px] h-[72px] rounded-[4px] border-[1px] border-[#D0D5DD] focus:border-[#0A62E6] hover:border-[#0A62E6] p-[12px]">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.13887 40.8654C18.3353 40.9399 29.7283 40.8654 40.9247 40.8654V39.1166H8.96704V7H7.13867L7.13887 40.8654Z" fill="#3F3F75" />
              <path
                d="M38.5411 29.8258C38.5411 29.8258 34.1206 22.6601 30.2206 22.0107C27.0593 21.4845 24.3557 24.6387 21.6204 26.3083C18.7839 28.0393 13.5794 32.2014 13.5794 32.2014V33.2839C13.5794 33.2839 18.7962 28.9591 21.6204 27.2661C24.365 25.6204 27.0637 22.4745 30.2206 22.9993C34.1081 23.6458 38.5411 31.3984 38.5411 31.3984M36.8427 30.7686C36.8427 31.6806 37.5784 32.4199 38.4859 32.4199C39.3934 32.4199 40.1291 31.6806 40.1291 30.7686C40.1291 29.8567 39.3934 29.1173 38.4859 29.1173C37.5784 29.1173 36.8427 29.8567 36.8427 30.7686ZM28.4372 22.45C28.4372 23.419 29.2188 24.2047 30.1832 24.2047C31.1475 24.2047 31.9291 23.4192 31.9291 22.45C31.9291 21.481 31.1475 20.6953 30.1832 20.6953C29.2188 20.6953 28.4372 21.4808 28.4372 22.45ZM19.8371 26.5158C19.8371 27.4848 20.6187 28.2705 21.583 28.2705C22.5474 28.2705 23.329 27.485 23.329 26.5158C23.329 25.5468 22.5474 24.7611 21.583 24.7611C20.6187 24.7611 19.8371 25.5466 19.8371 26.5158ZM11.8174 32.5291C11.8174 33.4981 12.599 34.2838 13.5633 34.2838C14.5277 34.2838 15.3093 33.4983 15.3093 32.5291C15.3093 31.5601 14.5277 30.7744 13.5633 30.7744C12.599 30.7744 11.8174 31.5599 11.8174 32.5291Z"
                fill="#EBC43F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.5843 21.7452C28.8551 21.1287 29.4687 20.6984 30.1824 20.6984C31.1009 20.6984 31.8537 21.4113 31.9231 22.3164C31.9266 22.3615 31.9283 22.4071 31.9283 22.4531C31.9283 22.5217 31.9244 22.5893 31.9168 22.6558C32.0098 22.7085 32.1028 22.7638 32.1955 22.8215C34.5908 24.3095 36.8731 27.364 37.9287 28.9015C37.9929 28.995 38.0525 29.0828 38.1073 29.1643C38.2143 29.139 38.3254 29.1242 38.4394 29.1211C38.4546 29.1206 38.4698 29.1204 38.4851 29.1204C39.3926 29.1204 40.1283 29.8598 40.1283 30.7717C40.1283 31.6837 39.3926 32.423 38.4851 32.423C37.5776 32.423 36.8419 31.6837 36.8419 30.7717C36.8419 30.4018 36.963 30.0603 37.1674 29.785C37.2291 29.702 37.2984 29.625 37.3742 29.555C37.3191 29.4732 37.2623 29.3897 37.2039 29.3046C35.9322 27.4504 33.912 24.8567 31.8526 23.6402C31.7649 23.5883 31.6771 23.539 31.5893 23.4924C31.5283 23.5757 31.4602 23.6533 31.3858 23.7245C31.0726 24.024 30.6489 24.2078 30.1824 24.2078C29.5355 24.2078 28.9708 23.8543 28.6692 23.329C28.6183 23.2403 28.5749 23.1468 28.5398 23.0493C28.4417 23.0701 28.3441 23.0939 28.2468 23.1203C26.7281 23.5336 25.3001 24.6107 23.8963 25.6694C23.7788 25.7581 23.6614 25.8466 23.5442 25.9345C23.4577 25.9995 23.3712 26.0642 23.2848 26.1284C23.3097 26.2387 23.3243 26.3529 23.3275 26.47C23.328 26.4863 23.3282 26.5026 23.3282 26.5189C23.3282 27.4881 22.5466 28.2736 21.5823 28.2736C21.3217 28.2736 21.0745 28.2163 20.8525 28.1135C20.751 28.0665 20.6548 28.01 20.5649 27.9451C20.4788 28.0032 20.3916 28.0625 20.3035 28.1229C18.7153 29.2126 16.8302 30.6738 15.4605 31.7637C15.3762 31.8308 15.2939 31.8965 15.2137 31.9606C15.2492 32.064 15.2753 32.1718 15.291 32.2829C15.3025 32.3644 15.3085 32.4476 15.3085 32.5322C15.3085 33.5014 14.5269 34.2869 13.5625 34.2869C12.5982 34.2869 11.8166 33.5012 11.8166 32.5322C11.8166 31.563 12.5982 30.7775 13.5625 30.7775C13.9208 30.7775 14.2539 30.886 14.531 31.072C14.6165 31.1294 14.6967 31.1942 14.7707 31.2655C14.8475 31.2056 14.9271 31.1436 15.0095 31.0796C16.2615 30.1064 18.1344 28.6775 19.7945 27.5188C19.8777 27.4607 19.9604 27.4033 20.0424 27.3467C19.9946 27.2571 19.9544 27.1629 19.9225 27.065C19.8666 26.8931 19.8363 26.7096 19.8363 26.5189C19.8363 25.5497 20.6179 24.7643 21.5823 24.7643C22.0207 24.7643 22.4214 24.9267 22.728 25.1949C22.804 25.2614 22.8742 25.3344 22.9378 25.413C23.0181 25.3539 23.0985 25.2943 23.179 25.2342C23.4049 25.0654 23.6313 24.8932 23.8584 24.7204C25.2449 23.6658 26.6572 22.5915 28.1576 22.1565C28.2637 22.1257 28.3703 22.0982 28.4773 22.074C28.5023 21.9599 28.5384 21.8499 28.5843 21.7452ZM28.234 21.8244C28.4983 20.9978 29.2698 20.3984 30.1824 20.3984C31.3138 20.3984 32.2283 21.3199 32.2283 22.4531C32.2283 22.4654 32.2282 22.4777 32.228 22.4899C32.6102 22.7184 32.9861 22.9842 33.3515 23.2738C34.3354 24.0535 35.2677 25.0259 36.0711 25.9706C36.8754 26.9162 37.5557 27.8403 38.0348 28.5276C38.1105 28.6362 38.1812 28.7389 38.2467 28.835C38.3248 28.8254 38.4044 28.8204 38.4851 28.8204C39.5597 28.8204 40.4283 29.6955 40.4283 30.7717C40.4283 31.848 39.5597 32.723 38.4851 32.723C37.4105 32.723 36.5419 31.848 36.5419 30.7717C36.5419 30.2977 36.7104 29.8627 36.9908 29.5243C36.5954 28.9459 36.1251 28.2922 35.6025 27.6303C34.8119 26.6292 33.9072 25.6162 32.9657 24.8162C32.5299 24.4458 32.0922 24.1263 31.6596 23.8748C31.2874 24.2648 30.7635 24.5078 30.1824 24.5078C29.3913 24.5078 28.7063 24.0574 28.3657 23.3991C27.5461 23.6151 26.7403 24.0409 25.9297 24.5727C25.3071 24.9812 24.6942 25.4434 24.0767 25.9092C24.0038 25.9641 23.9308 26.0191 23.8578 26.0741C23.7759 26.1357 23.694 26.1973 23.6119 26.2587C23.6227 26.3439 23.6282 26.4308 23.6282 26.5189C23.6282 27.6524 22.7137 28.5736 21.5823 28.5736C21.2135 28.5736 20.8678 28.4757 20.5693 28.3046C19.3552 29.1322 17.9476 30.1954 16.7246 31.1495C16.3079 31.4746 15.9135 31.7863 15.5566 32.0707C15.5906 32.2191 15.6085 32.3736 15.6085 32.5322C15.6085 33.6657 14.694 34.5869 13.5625 34.5869C12.4311 34.5869 11.5166 33.6655 11.5166 32.5322C11.5166 31.3988 12.4311 30.4775 13.5625 30.4775C14.0181 30.4775 14.4385 30.6269 14.7782 30.8794C15.2322 30.5263 15.7711 30.1106 16.354 29.6681C17.3928 28.8796 18.5756 28.0023 19.6667 27.2422C19.5824 27.0171 19.5363 26.7734 19.5363 26.5189C19.5363 25.3855 20.4508 24.4643 21.5823 24.4643C22.1202 24.4643 22.6091 24.6725 22.974 25.0128C23.1455 24.8849 23.3178 24.7545 23.4913 24.6227C23.5533 24.5756 23.6154 24.5283 23.6777 24.481C24.3029 24.0054 24.943 23.5185 25.5949 23.0887C26.4319 22.5369 27.3096 22.0645 28.234 21.8244Z"
                fill="#EBC43F"
              />
              <path
                d="M38.5236 19.4238C38.5236 19.4238 33.6569 13.6926 30.203 13.5029C26.8839 13.3206 24.6127 17.141 21.6028 18.551C19.0233 19.7589 13.5618 21.4424 13.5618 21.4424V22.3C13.5618 22.3 19.0349 20.7013 21.6028 19.5086C24.6374 18.0992 26.8609 14.1746 30.203 14.3325C33.6476 14.4954 38.5236 20.4798 38.5236 20.4798M36.8251 20.0091C36.8251 20.921 37.5608 21.6604 38.4683 21.6604C39.3758 21.6604 40.1115 20.921 40.1115 20.0091C40.1115 19.0971 39.3758 18.3578 38.4683 18.3578C37.5608 18.3578 36.8251 19.0971 36.8251 20.0091ZM28.4196 13.9422C28.4196 14.9112 29.2013 15.6969 30.1656 15.6969C31.1299 15.6969 31.9115 14.9114 31.9115 13.9422C31.9115 12.9732 31.1299 12.1875 30.1656 12.1875C29.2013 12.1875 28.4196 12.973 28.4196 13.9422ZM19.8195 18.7584C19.8195 19.7274 20.6011 20.5131 21.5655 20.5131C22.5298 20.5131 23.3114 19.7276 23.3114 18.7584C23.3114 17.7894 22.5298 17.0037 21.5655 17.0037C20.6011 17.0037 19.8195 17.7892 19.8195 18.7584ZM11.7998 21.7698C11.7998 22.7388 12.5814 23.5245 13.5457 23.5245C14.5101 23.5245 15.2917 22.739 15.2917 21.7698C15.2917 20.8008 14.5101 20.0152 13.5457 20.0152C12.5814 20.0152 11.7998 20.8006 11.7998 21.7698Z"
                fill="#FD7536"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.8949 19.2726C19.8659 19.1766 19.8448 19.0772 19.8325 18.975C19.8241 18.905 19.8197 18.8338 19.8197 18.7615C19.8197 17.7923 20.6013 17.0068 21.5657 17.0068C22.0391 17.0068 22.4684 17.1962 22.7829 17.5036C22.8547 17.5738 22.9206 17.6502 22.9796 17.7319C23.0607 17.674 23.1415 17.615 23.2219 17.555C23.7716 17.145 24.3056 16.6881 24.8375 16.2329C25.9037 15.3205 26.9615 14.4154 28.1201 13.9097C28.2216 13.8654 28.3238 13.8242 28.4269 13.7863C28.4374 13.6692 28.4593 13.5554 28.4915 13.446C28.7055 12.7201 29.374 12.1906 30.1658 12.1906C31.0206 12.1906 31.7319 12.808 31.8824 13.6232C31.9016 13.7276 31.9117 13.8353 31.9117 13.9453C31.9117 13.9509 31.9117 13.9566 31.9116 13.9622C32.0095 14.0054 32.1077 14.0512 32.2061 14.0994C34.219 15.0855 36.3069 17.0672 37.507 18.3161C37.582 18.3941 37.6535 18.4693 37.7213 18.5411C37.8165 18.4922 37.917 18.4524 38.0217 18.4227C38.1638 18.3825 38.3136 18.3609 38.4685 18.3609C39.376 18.3609 40.1117 19.1003 40.1117 20.0122C40.1117 20.9242 39.376 21.6635 38.4685 21.6635C37.561 21.6635 36.8253 20.9242 36.8253 20.0122C36.8253 19.7329 36.8944 19.4698 37.0162 19.2392C37.0645 19.1477 37.1211 19.0614 37.185 18.9811C37.1173 18.9098 37.0477 18.8369 36.976 18.7626C35.6979 17.4379 33.8077 15.694 32.0065 14.8432C31.9149 14.8 31.8236 14.759 31.7325 14.7206C31.6877 14.8119 31.6352 14.8987 31.5759 14.9802C31.2583 15.4166 30.745 15.7 30.1658 15.7C29.536 15.7 28.9842 15.3649 28.6771 14.8625C28.6248 14.7769 28.5795 14.6865 28.5422 14.592C28.4483 14.6253 28.355 14.6616 28.2625 14.7004C27.0634 15.2041 25.9823 16.1537 24.8915 17.112C24.4484 17.5012 24.0037 17.8919 23.5488 18.2546C23.4616 18.3242 23.374 18.3927 23.2859 18.46C23.3028 18.558 23.3116 18.6587 23.3116 18.7615C23.3116 18.7801 23.3113 18.7986 23.3107 18.817C23.2816 19.7605 22.5115 20.5162 21.5657 20.5162C21.2255 20.5162 20.9081 20.4184 20.6398 20.2494C20.5412 20.1873 20.4492 20.1156 20.3652 20.0356C20.2653 20.0748 20.1638 20.1142 20.0609 20.1537C18.6176 20.7071 16.8978 21.2721 15.59 21.6838C15.4929 21.7144 15.3981 21.7441 15.3058 21.773C15.3011 21.7744 15.2965 21.7759 15.2919 21.7773C15.2916 21.8879 15.2812 21.9961 15.2614 22.101C15.1086 22.9134 14.3987 23.5276 13.5459 23.5276C12.5816 23.5276 11.8 22.742 11.8 21.773C11.8 20.8038 12.5816 20.0183 13.5459 20.0183C14.1068 20.0183 14.6058 20.284 14.9252 20.697C14.9883 20.7786 15.0444 20.8659 15.0926 20.9581C15.1858 20.9278 15.2821 20.8963 15.3812 20.8638C16.5822 20.4702 18.1911 19.9247 19.6143 19.3808C19.7087 19.3447 19.8023 19.3087 19.8949 19.2726ZM19.5451 19.0861C19.5284 18.9803 19.5197 18.8719 19.5197 18.7615C19.5197 17.628 20.4342 16.7068 21.5657 16.7068C22.1394 16.7068 22.6573 16.9437 23.0285 17.325C23.2069 17.1923 23.3845 17.0538 23.5618 16.9111C23.9018 16.6375 24.2381 16.3509 24.5767 16.0612C24.5988 16.0423 24.6209 16.0234 24.643 16.0045C24.9588 15.7343 25.2769 15.462 25.5975 15.2005C26.3973 14.548 27.2365 13.9407 28.1539 13.5702C28.3293 12.6154 29.1622 11.8906 30.1658 11.8906C31.2368 11.8906 32.1134 12.7163 32.204 13.7657C32.5095 13.909 32.8141 14.0739 33.1145 14.2538C34.078 14.8307 35.0255 15.5778 35.8573 16.3128C36.6204 16.987 37.2911 17.6555 37.7938 18.1817C38.0039 18.1036 38.2312 18.0609 38.4685 18.0609C39.5431 18.0609 40.4117 18.936 40.4117 20.0122C40.4117 21.0885 39.5431 21.9635 38.4685 21.9635C37.3939 21.9635 36.5253 21.0884 36.5253 20.0122C36.5253 19.6469 36.6255 19.3047 36.7997 19.012C36.4041 18.6006 35.9476 18.1467 35.4522 17.6912C34.6349 16.9399 33.7179 16.1901 32.7983 15.6198C32.4798 15.4222 32.1644 15.2484 31.8557 15.1039C31.4875 15.6447 30.8685 16 30.1658 16C29.4071 16 28.746 15.5857 28.3927 14.9711C27.5647 15.3161 26.7796 15.894 25.9809 16.5655C25.6838 16.8154 25.3884 17.0748 25.0895 17.3374C25.0512 17.371 25.0129 17.4047 24.9744 17.4384C24.6372 17.7344 24.2953 18.0328 23.9473 18.3181C23.8341 18.411 23.72 18.5026 23.6048 18.5927C23.6093 18.6484 23.6116 18.7047 23.6116 18.7615C23.6116 19.895 22.6971 20.8162 21.5657 20.8162C21.0902 20.8162 20.6531 20.6535 20.306 20.3807C19.176 20.8189 17.8654 21.2654 16.7122 21.64C16.312 21.77 15.9297 21.8917 15.5794 22.0017C15.4661 23.0278 14.6002 23.8276 13.5459 23.8276C12.4145 23.8276 11.5 22.9062 11.5 21.773C11.5 20.6395 12.4145 19.7183 13.5459 19.7183C14.242 19.7183 14.8559 20.067 15.2254 20.5992C15.6179 20.4708 16.0563 20.3254 16.5189 20.1686C17.4913 19.8392 18.5656 19.4612 19.5451 19.0861Z"
                fill="#FD7536"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[24px]">
        <div>
          <span className="font-Inter font-[500] text-[14px] leading-[20px] text-[#242936]">X-axis</span>
          {inputXOn && <TodoList />}

          <button
            type="button"
            onClick={() => setInputxon(true)}
            className="flex items-center justify-center gap-2 border-dashed border-[1px] border-[#D8E2EC] w-full h-[40px] px-[12px] py-[8px] mt-[10px]"
          >
            <FiPlus className="w-[24px] h-[24px] text-[#667085]" />
            <p className="font-[400] text-[16px] leading-[24px] text-[#A4AEB8]">Add</p>
          </button>
        </div>

        <div>
          <span className="font-Inter font-[500] text-[14px] leading-[20px] text-[#242936]">Y-axis</span>
          {inputYOn && <TodoList />}

          <button
            type="button"
            onClick={() => setInputyon(true)}
            className="flex items-center justify-center gap-2 border-dashed border-[1px] border-[#D8E2EC] w-full h-[40px] px-[12px] py-[8px] mt-[10px]"
          >
            <FiPlus className="w-[24px] h-[24px] text-[#667085]" />
            <p className="font-[400] text-[16px] leading-[24px] text-[#A4AEB8]">Add</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartModal;
