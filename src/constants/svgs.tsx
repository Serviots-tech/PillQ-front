import React from 'react';
import Svg, { Circle, Line, Path, Rect, SvgXml } from 'react-native-svg';


export const HideEyeIcon = () => (
  <Svg width="20" height="17" viewBox="0 0 20 17" fill="none">
    <Path
      d="M19.3193 6.39794C17.6981 4.62835 14.396 1.65845 10.4931 1.65845C6.59033 1.65845 3.28815 4.62835 1.66704 6.39794C1.22941 6.87108 0.986328 7.49186 0.986328 8.13635C0.986328 8.78085 1.22941 9.40163 1.66704 9.87477C3.28815 11.6444 6.59033 14.6143 10.4931 14.6143C14.396 14.6143 17.6981 11.6444 19.3193 9.87477C19.7569 9.40161 20 8.78084 20 8.13635C20 7.49187 19.7569 6.87109 19.3193 6.39794ZM18.0456 8.70736C16.616 10.2687 13.7346 12.8868 10.4931 12.8868C7.25168 12.8868 4.37031 10.2687 2.94068 8.70736C2.79898 8.55094 2.7205 8.34742 2.7205 8.13635C2.7205 7.92529 2.79898 7.72177 2.94068 7.56535C4.37031 6.00409 7.25168 3.38589 10.4931 3.38589C13.7346 3.38589 16.616 6.00409 18.0456 7.56535C18.1873 7.72177 18.2658 7.92529 18.2658 8.13635C18.2658 8.34742 18.1873 8.55094 18.0456 8.70736ZM10.4931 4.24961C9.72442 4.24961 8.97295 4.47756 8.33378 4.90464C7.69461 5.33173 7.19644 5.93875 6.90226 6.64896C6.60808 7.35917 6.53111 8.14067 6.68108 8.89462C6.83105 9.64857 7.20123 10.3411 7.7448 10.8847C8.28837 11.4283 8.98092 11.7984 9.73487 11.9484C10.4888 12.0984 11.2703 12.0214 11.9805 11.7272C12.6907 11.4331 13.2978 10.9349 13.7249 10.2957C14.1519 9.65654 14.3799 8.90508 14.3799 8.13635C14.3787 7.10588 13.9689 6.11793 13.2402 5.38927C12.5116 4.66061 11.5236 4.25075 10.4931 4.24961ZM10.4931 10.2957C10.0661 10.2957 9.64859 10.169 9.2935 9.93175C8.9384 9.69448 8.66164 9.35724 8.49821 8.96268C8.33477 8.56812 8.29201 8.13396 8.37533 7.71509C8.45865 7.29623 8.6643 6.91148 8.96628 6.6095C9.26827 6.30751 9.65302 6.10186 10.0719 6.01854C10.4907 5.93523 10.9249 5.97799 11.3195 6.14142C11.714 6.30485 12.0513 6.58161 12.2885 6.93671C12.5258 7.29181 12.6524 7.70928 12.6524 8.13635C12.6519 8.70888 12.4243 9.2578 12.0194 9.66263C11.6146 10.0675 11.0657 10.2951 10.4931 10.2957Z"
      fill="#7F7F83"
    />
    <Line
      x1="2.03467"
      y1="14.5837"
      x2="18.2297"
      y2="1.47348"
      stroke="#7F7F83"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </Svg>
);

export const ShowEyeIcon = () => (
  <Svg width="20" height="14" viewBox="0 0 20 14" fill="none">
    <Path
      d="M19.3193 5.39794C17.6981 3.62835 14.396 0.658447 10.4931 0.658447C6.59033 0.658447 3.28815 3.62835 1.66704 5.39794C1.22941 5.87108 0.986328 6.49186 0.986328 7.13635C0.986328 7.78085 1.22941 8.40163 1.66704 8.87477C3.28815 10.6444 6.59033 13.6143 10.4931 13.6143C14.396 13.6143 17.6981 10.6444 19.3193 8.87477C19.7569 8.40161 20 7.78084 20 7.13635C20 6.49187 19.7569 5.87109 19.3193 5.39794ZM18.0456 7.70736C16.616 9.26871 13.7346 11.8868 10.4931 11.8868C7.25168 11.8868 4.37031 9.26871 2.94068 7.70736C2.79898 7.55094 2.7205 7.34742 2.7205 7.13635C2.7205 6.92529 2.79898 6.72177 2.94068 6.56535C4.37031 5.00409 7.25168 2.38589 10.4931 2.38589C13.7346 2.38589 16.616 5.00409 18.0456 6.56535C18.1873 6.72177 18.2658 6.92529 18.2658 7.13635C18.2658 7.34742 18.1873 7.55094 18.0456 7.70736ZM10.4931 3.24961C9.72442 3.24961 8.97295 3.47756 8.33378 3.90464C7.69461 4.33173 7.19644 4.93875 6.90226 5.64896C6.60808 6.35917 6.53111 7.14067 6.68108 7.89462C6.83105 8.64857 7.20123 9.34113 7.7448 9.8847C8.28837 10.4283 8.98092 10.7984 9.73487 10.9484C10.4888 11.0984 11.2703 11.0214 11.9805 10.7272C12.6907 10.4331 13.2978 9.93489 13.7249 9.29571C14.1519 8.65654 14.3799 7.90508 14.3799 7.13635C14.3787 6.10588 13.9689 5.11793 13.2402 4.38927C12.5116 3.66061 11.5236 3.25075 10.4931 3.24961ZM10.4931 9.29566C10.0661 9.29566 9.64859 9.16902 9.2935 8.93175C8.9384 8.69448 8.66164 8.35724 8.49821 7.96268C8.33477 7.56812 8.29201 7.13396 8.37533 6.71509C8.45865 6.29623 8.6643 5.91148 8.96628 5.6095C9.26827 5.30751 9.65302 5.10186 10.0719 5.01854C10.4907 4.93523 10.9249 4.97799 11.3195 5.14142C11.714 5.30485 12.0513 5.58161 12.2885 5.93671C12.5258 6.29181 12.6524 6.70928 12.6524 7.13635C12.6519 7.70888 12.4243 8.2578 12.0194 8.66263C11.6146 9.06746 11.0657 9.29513 10.4931 9.29566Z"
      fill="#7F7F83"
    />
  </Svg>
);

export const EmailIcon = () => {
  const svgMarkup = `
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 14H13C13.7956 14 14.5587 13.6948 15.1213 13.1516C15.6839 12.6084 16 11.8717 16 11.1034V2.89655C16 2.12834 15.6839 1.39159 15.1213 0.84838C14.5587 0.305172 13.7956 0 13 0H3C2.20435 0 1.44129 0.305172 0.87868 0.84838C0.316071 1.39159 0 2.12834 0 2.89655V11.1034C0 11.8717 0.316071 12.6084 0.87868 13.1516C1.44129 13.6948 2.20435 14 3 14ZM2 2.89655C2 2.64048 2.10536 2.3949 2.29289 2.21383C2.48043 2.03276 2.73478 1.93103 3 1.93103H13C13.2652 1.93103 13.5196 2.03276 13.7071 2.21383C13.8946 2.3949 14 2.64048 14 2.89655V3.33103L9.2325 6.61862C8.87107 6.86234 8.44085 6.99304 8 6.99304C7.55915 6.99304 7.12893 6.86234 6.7675 6.61862L2 3.33103V2.89655ZM2 5.70379L5.605 8.19C6.30381 8.67203 7.14117 8.93116 8 8.93116C8.85883 8.93116 9.69619 8.67203 10.395 8.19L14 5.70379V11.1034C14 11.3595 13.8946 11.6051 13.7071 11.7862C13.5196 11.9672 13.2652 12.069 13 12.069H3C2.73478 12.069 2.48043 11.9672 2.29289 11.7862C2.10536 11.6051 2 11.3595 2 11.1034V5.70379Z" fill="#7F7F83"/>
    </svg>
  `;

  return <SvgXml xml={svgMarkup} width="16" height="14" />;
};

export const PasswordIcon = () => (
  <Svg width="16" height="20" viewBox="0 0 16 20" fill="none">
    <Path
      d="M14.2222 7.05269V6.88889C14.2222 5.23866 13.5667 3.65601 12.3998 2.48912C11.2329 1.32223 9.65024 0.666672 8 0.666672C6.34976 0.666672 4.76712 1.32223 3.60022 2.48912C2.43333 3.65601 1.77778 5.23866 1.77778 6.88889V7.05269C1.25932 7.23531 0.810102 7.57393 0.491793 8.02207C0.173484 8.47021 0.00169101 9.00589 0 9.55556V16.6667C0.00077173 17.3737 0.281971 18.0515 0.781901 18.5514C1.28183 19.0514 1.95966 19.3326 2.66667 19.3333H13.3333C14.0403 19.3326 14.7182 19.0514 15.2181 18.5514C15.718 18.0515 15.9992 17.3737 16 16.6667V9.55556C15.9983 9.00589 15.8265 8.47021 15.5082 8.02207C15.1899 7.57393 14.7407 7.23531 14.2222 7.05269ZM8 2.44445C9.17832 2.44583 10.308 2.91453 11.1412 3.74773C11.9744 4.58092 12.4431 5.71058 12.4444 6.88889H3.55556C3.55694 5.71058 4.02564 4.58092 4.85883 3.74773C5.69203 2.91453 6.82168 2.44583 8 2.44445ZM14.2222 16.6667C14.2219 16.9023 14.1282 17.1282 13.9615 17.2949C13.7949 17.4615 13.569 17.5553 13.3333 17.5556H2.66667C2.43101 17.5553 2.2051 17.4615 2.03846 17.2949C1.87183 17.1282 1.77808 16.9023 1.77778 16.6667V9.55556C1.77808 9.31991 1.87183 9.09399 2.03846 8.92736C2.2051 8.76073 2.43101 8.66698 2.66667 8.66667H13.3333C13.569 8.66698 13.7949 8.76073 13.9615 8.92736C14.1282 9.09399 14.2219 9.31991 14.2222 9.55556V16.6667ZM9.77778 12.2222C9.77707 12.533 9.69455 12.8382 9.53852 13.1069C9.38248 13.3757 9.15843 13.5987 8.88889 13.7534V14.8889C8.88889 15.1246 8.79524 15.3507 8.62854 15.5174C8.46184 15.6841 8.23575 15.7778 8 15.7778C7.76425 15.7778 7.53816 15.6841 7.37146 15.5174C7.20476 15.3507 7.11111 15.1246 7.11111 14.8889V13.7534C6.84187 13.5969 6.61856 13.3723 6.46361 13.1021C6.30866 12.832 6.22753 12.5258 6.22836 12.2144C6.2292 11.903 6.31197 11.5972 6.46837 11.3279C6.62476 11.0586 6.84928 10.8352 7.11935 10.6801C7.38943 10.525 7.69556 10.4438 8.00699 10.4444C8.31842 10.4451 8.62419 10.5278 8.89357 10.684C9.16296 10.8403 9.38649 11.0647 9.54169 11.3347C9.6969 11.6047 9.77832 11.9108 9.77778 12.2222Z"
      fill="#7F7F83"
    />
  </Svg>
);

export const NameIcon = () => (
  <Svg width="15" height="16" viewBox="0 0 15 16" fill="none">
    <Circle cx="7.5" cy="3.5" r="2.6" stroke="#7E8183" strokeWidth="1.8" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.3213 14.2667C12.6742 14.2667 12.9314 13.9313 12.8047 13.6019C12.5122 12.8415 12.0836 12.1507 11.5433 11.5688C11.0029 10.9869 10.3614 10.5253 9.65542 10.2104C8.94942 9.89543 8.19274 9.73333 7.42857 9.73333C6.6644 9.73333 5.90772 9.89543 5.20172 10.2104C4.49572 10.5253 3.85423 10.9869 3.31388 11.5688C2.77353 12.1507 2.34491 12.8415 2.05247 13.6019C1.92577 13.9313 2.18295 14.2667 2.53588 14.2667L12.3213 14.2667ZM14.6807 14.2667C14.5873 13.8137 14.4573 13.3693 14.2917 12.9385C13.9184 11.9679 13.3712 11.086 12.6814 10.3431C11.9916 9.60028 11.1726 9.011 10.2714 8.60896C9.37009 8.20693 8.4041 8 7.42857 8C6.45304 8 5.48706 8.20693 4.58578 8.60896C3.6845 9.011 2.86558 9.60028 2.17578 10.3431C1.48597 11.086 0.938787 11.9679 0.565466 12.9385C0.3998 13.3693 0.269812 13.8137 0.176461 14.2667C0.126381 14.5097 0.0868455 14.7551 0.0580016 15.0022C-0.00602805 15.5508 0.447715 16 1 16L13.8571 16C14.4094 16 14.8632 15.5508 14.7991 15.0022C14.7703 14.7551 14.7308 14.5097 14.6807 14.2667Z"
      fill="#7E8183"
    />
  </Svg>
);

export const PhoneIcon = () => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.7437 9.70719L15.1678 11.1884C15.6223 11.4658 15.9249 11.9367 15.9878 12.4661C16.0508 12.9949 15.867 13.5243 15.4906 13.901C15.0194 14.3725 14.4772 14.9151 14.0654 15.3221C13.5117 15.8762 12.7155 16.1123 11.9497 15.9494L11.9483 15.9487C5.35812 14.5275 1.3995 10.5524 0.0468552 4.04451V4.04234C-0.108762 3.27963 0.128646 2.4894 0.678744 1.93961L2.10899 0.509089C2.48464 0.132452 3.01374 -0.050804 3.54213 0.0122036C4.07123 0.0752187 4.5417 0.377993 4.81964 0.832137L6.2991 3.25788C6.71745 3.94308 6.6125 4.8253 6.04504 5.39324C5.88508 5.55259 5.71644 5.72135 5.57167 5.87345C5.56877 5.87635 5.56588 5.87997 5.56226 5.88359C5.4175 6.02846 5.36033 6.23996 5.41388 6.43842C5.99581 8.57953 7.38485 9.9565 9.56557 10.5873C9.76825 10.6445 9.98538 10.5873 10.1338 10.4388L10.6107 9.96151C11.1775 9.39437 12.059 9.28926 12.7437 9.70719Z"
      fill="#7E8183"
    />
  </Svg>
);

export const IosbackIcon = () => (
  <Svg width="12" height="20" viewBox="0 0 12 20" fill="none">
    <Path
      d="M0.303223 10.0068C0.308757 9.81315 0.347493 9.63607 0.419434 9.47559C0.491374 9.3151 0.602051 9.16016 0.751465 9.01074L9.06885 0.958984C9.3068 0.721029 9.6001 0.602051 9.94873 0.602051C10.1812 0.602051 10.3914 0.657389 10.5796 0.768066C10.7733 0.878743 10.9255 1.02816 11.0361 1.21631C11.1523 1.40446 11.2104 1.61475 11.2104 1.84717C11.2104 2.19027 11.0804 2.49186 10.8203 2.75195L3.2998 9.99854L10.8203 17.2534C11.0804 17.519 11.2104 17.8206 11.2104 18.1582C11.2104 18.3962 11.1523 18.6092 11.0361 18.7974C10.9255 18.9855 10.7733 19.1349 10.5796 19.2456C10.3914 19.3618 10.1812 19.4199 9.94873 19.4199C9.6001 19.4199 9.3068 19.2982 9.06885 19.0547L0.751465 11.0029C0.596517 10.8535 0.483073 10.6986 0.411133 10.5381C0.339193 10.3721 0.303223 10.195 0.303223 10.0068Z"
      fill="black"
    />
  </Svg>
);

export const AndroidbackIcon = () => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" >
    <Path
      d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
      fill="#333333"
    />
  </Svg>
);

export const Tick = () => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" >
    <Path
      d="M11 0C4.93124 0 0 4.93124 0 11C0 17.0688 4.93124 22 11 22C17.0688 22 22 17.0688 22 11C22.0009 4.93124 17.0697 0 11 0ZM17.3641 7.7713L9.339 16.1669C9.15367 16.3522 8.90095 16.4622 8.64734 16.4622C8.4026 16.4622 8.16672 16.369 7.99027 16.2094L3.93618 12.517C3.54868 12.1543 3.52296 11.5478 3.86879 11.1514C4.23148 10.755 4.84686 10.7302 5.24235 11.084L8.59681 14.1352L15.9559 6.43039C16.3265 6.04289 16.9419 6.03401 17.3294 6.40467C17.7187 6.76824 17.7356 7.3838 17.3641 7.7713Z"
      fill="#00381A"
    />
  </Svg>
);

export const PillQLSvg=()=>(
  <Svg width="61" height="62" viewBox="0 0 61 62" fill="none" >
    <Rect width="60.9669" height="62" fill="#00A8A8" />
    <Path d="M22.0192 41.602C17.97 37.4842 17.0962 34.4462 17.0962 30.9742C17.0962 27.5022 18.3968 24.0302 21.0031 21.3848C23.6095 18.7343 27.0185 17.4117 30.4327 17.4117C33.8468 17.4117 36.8291 18.3003 40.8834 22.4182L52.2334 33.9605L59.4529 41.3023C60.4335 38.1507 60.9669 34.7045 60.9669 31C60.9669 12.214 47.3205 0 30.4835 0C13.6464 0 0 12.214 0 31C0 49.786 13.6464 62 30.4835 62C34.0145 62 37.4032 61.4627 40.5532 60.4397L33.3743 53.1392L22.0243 41.5968L22.0192 41.602Z" fill="white" />
    <Path d="M57.4765 46.1486L50.506 39.0651L43.2255 31.6613C40.6293 29.0211 38.714 28.4476 36.5242 28.4476C34.3345 28.4476 32.1448 29.295 30.4784 30.9948C28.8068 32.6946 27.9736 34.9215 27.9736 37.1431C27.9736 39.3648 28.5325 41.3178 31.1338 43.958L38.4142 51.3618L45.3543 58.4195L45.6947 58.7656C48.2909 61.4058 50.2062 61.9793 52.396 61.9793C54.0065 61.9793 55.612 61.5195 57.0142 60.605C57.5223 60.2743 57.9999 59.8816 58.4419 59.4321C58.889 58.9775 59.2751 58.4866 59.6002 57.97C60.4995 56.5491 60.9466 54.9165 60.9466 53.2838C60.9466 51.057 60.3826 49.1091 57.7865 46.469L57.4765 46.1538V46.1486ZM40.736 41.4315C39.1407 43.0538 38.1653 45.0791 37.8045 47.2181L32.8662 42.1961C31.8552 41.168 31.1896 40.2586 30.8289 39.4061C30.5444 38.7396 30.4275 38.0628 30.4275 37.1431C30.4275 35.4846 31.0626 33.9295 32.2159 32.7566C33.3641 31.5838 34.8985 30.9431 36.5242 30.9431C37.4286 30.9431 38.0941 31.0671 38.7495 31.3513C39.5828 31.7181 40.482 32.395 41.493 33.4231L46.4263 38.44C44.267 38.8171 42.2958 39.8453 40.7411 41.4263L40.736 41.4315Z" fill="white" />
  </Svg>
)

export const MaleIcon = ({ color="#00A8A8" }) => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill={color}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.4 0.876199L13.3998 0.860467L13.4 0.847779V0.84539C13.4 0.601277 13.2926 0.382813 13.1246 0.230051C12.9747 0.0881433 12.7734 1.11461e-05 12.5516 0L12.5381 0.000142649L12.5258 1.11908e-05H6.22472C5.74975 1.11908e-05 5.34853 0.369748 5.34853 0.84539C5.34853 1.32103 5.74975 1.69077 6.22472 1.69077H10.5096L8.49786 3.70306C7.64296 3.16453 6.6313 2.85266 5.54853 2.85266C2.48894 2.85266 0 5.3416 0 8.40119C0 11.4609 2.48895 13.9497 5.54853 13.9497C8.60827 13.9497 11.0971 11.4609 11.0971 8.40119C11.0971 7.04602 10.6086 5.80259 9.79892 4.83822L11.7031 2.93349V7.17529C11.7031 7.65119 12.0752 8.05148 12.5516 8.05148C13.0279 8.05148 13.4 7.65119 13.4 7.17529L13.4 0.876199ZM5.54853 0.84539C5.54853 1.20187 5.8513 1.49077 6.22472 1.49077H10.9923L8.52479 3.959C8.52477 3.95898 8.52482 3.95902 8.52479 3.959L10.9923 1.49077H6.22472C5.8513 1.49077 5.54853 1.20187 5.54853 0.84539ZM1.7227 8.40102C1.7227 6.29161 3.43912 4.57519 5.54853 4.57519C7.65795 4.57519 9.37452 6.29178 9.37452 8.40102C9.37452 10.5106 7.6581 12.227 5.54853 12.227C3.43912 12.227 1.7227 10.5106 1.7227 8.40102Z"
      fill={color}
    />
  </Svg>
);

export const FemaleIcon = ({ color = "#00A8A8" }) => (
  <Svg width={12} height={18} viewBox="0 0 12 18" fill={color}>
    <Path
      d="M12 6.0184C12.0037 2.69849 9.32059 0.00455086 6.00671 3.81593e-06C2.69339 -0.00369653 0.00378703 2.68428 4.70939e-06 6.00419C-0.0036891 8.97928 2.16595 11.5097 5.10235 11.9544V13.9399H3.63744C3.14175 13.9399 2.73914 14.3425 2.73914 14.8399C2.73914 15.3365 3.14101 15.7398 3.63744 15.7398H5.10235V17.1001C5.10235 17.5967 5.50423 18 6.00066 18C6.49635 18 6.89896 17.5974 6.89896 17.1001L6.89822 15.7391H8.36313C8.85882 15.7391 9.26143 15.3365 9.26143 14.8391C9.26143 14.3425 8.85956 13.9392 8.36313 13.9392H6.89822V11.9536C9.828 11.5081 11.9947 8.98762 12 6.0184ZM5.9999 10.2301C3.67812 10.2301 1.79585 8.34438 1.79509 6.0184C1.79509 3.69239 3.67738 1.8067 5.99914 1.80594C8.32092 1.80594 10.2032 3.69166 10.2039 6.01764C10.2017 8.34289 8.32092 10.2273 5.9999 10.2301Z"
      fill={color}
    />
  </Svg>
);

export const OtherIcon = ({ color="#000" }) => (
  <Svg width={5} height={17} viewBox="0 0 5 17" fill={color}>
    <Circle cx={2.16187} cy={2.16187} r={2.16187} fill={color} />
    <Circle cx={2.16187} cy={8.21509} r={2.16187} fill={color} />
    <Circle cx={2.16187} cy={14.2683} r={2.16187} fill={color} />
  </Svg>
);

export const NonBinaryIcon = ({ color = "#00A8A8" }) => (
  <Svg width={13} height={24} viewBox="0 0 13 24" fill={color}>
    <Path
      d="M7.33472 10.3726V7.11796L9.88183 8.60377C10.0469 8.69811 10.2592 8.65094 10.3535 8.48585L10.896 7.56606C10.9903 7.40097 10.9431 7.18871 10.778 7.09438L8.23093 5.60856L10.778 4.12275C10.9431 4.02842 10.9903 3.81616 10.896 3.65107L10.3535 2.73128C10.2592 2.56619 10.0469 2.51902 9.88183 2.61336L7.33472 4.09917V1.12754C7.33472 0.938869 7.19322 0.797363 7.00454 0.797363H5.94325C5.75457 0.797363 5.61307 0.938869 5.61307 1.12754V4.07558L3.06596 2.58977C2.90087 2.49543 2.68861 2.5426 2.59427 2.70769L2.05184 3.62748C1.9575 3.79257 2.00467 4.00483 2.16976 4.09917L4.71686 5.58498L2.16976 7.07079C2.00467 7.16513 1.9575 7.37739 2.05184 7.54248L2.59427 8.46227C2.68861 8.62736 2.90087 8.67453 3.06596 8.58019L5.61307 7.09438V10.3254C2.45277 10.7971 0 13.4857 0 16.7404C0 20.3016 2.90087 23.2025 6.4621 23.2025C10.0233 23.2025 12.9242 20.3016 12.9242 16.7404C12.9242 13.4857 10.4714 10.7971 7.33472 10.3726ZM6.4621 21.4572C3.86783 21.4572 1.76882 19.3582 1.76882 16.7639C1.76882 14.1697 3.86783 12.0471 6.4621 12.0471C9.05638 12.0471 11.1554 14.1461 11.1554 16.7404C11.1554 19.3346 9.05638 21.4572 6.4621 21.4572Z"
      fill={color}
    />
  </Svg>
);

export const CheckmarkIcon = () => (
  <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
    <Path
      d="M11 0C4.92 0 0 4.92 0 11C0 17.08 4.92 22 11 22C17.08 22 22 17.08 22 11C22 4.92 17.08 0 11 0ZM16.79 8.12L10.3 15.23C10.12 15.43 9.86 15.55 9.58 15.56H9.56C9.29 15.56 9.04 15.46 8.85 15.27L5.24 11.66C4.85 11.27 4.85 10.64 5.24 10.25C5.63 9.86 6.26 9.86 6.65 10.25L9.52 13.12L15.31 6.78C15.68 6.37 16.31 6.34 16.72 6.72C17.13 7.09 17.16 7.72 16.78 8.13L16.79 8.12Z"
      fill="#00A8A8"
    />
  </Svg>
);


export const CalenderIcon = () => (
  <Svg width={21} height={20} viewBox="0 0 21 20" fill="none">
    <Path
      d="M18.5348 1.98254H16.6821C16.7424 1.47911 16.5746 0.973978 16.2193 0.595349C15.8631 0.21672 15.3551 0 14.8204 0C14.2866 0 13.7777 0.21672 13.4216 0.595349C13.0663 0.973978 12.8984 1.47911 12.9597 1.98254H8.06757C8.12885 1.47827 7.96099 0.973978 7.60573 0.595349C7.24957 0.21672 6.74064 0 6.20686 0C5.67217 0 5.16415 0.21672 4.808 0.595349C4.45273 0.973978 4.28486 1.47825 4.34525 1.98254H2.49252C1.40006 1.98338 0.514559 2.82412 0.513672 3.86135V18.1212C0.51456 19.1576 1.40006 19.9983 2.49252 20H18.5348C19.6273 19.9983 20.5128 19.1576 20.5137 18.1212V3.86135C20.5128 2.82412 19.6272 1.98338 18.5348 1.98254ZM14.3807 1.74812C14.3816 1.51875 14.577 1.33322 14.8185 1.33238C15.0601 1.33154 15.2573 1.51537 15.2609 1.74475V3.56622V3.56707C15.2537 3.79307 15.0584 3.97268 14.8203 3.97268C14.5823 3.97268 14.3869 3.79306 14.3807 3.56707C14.3807 3.11338 14.3798 2.20097 14.3807 1.74812ZM5.76619 1.74896C5.76708 1.51959 5.96248 1.33322 6.20407 1.33154C6.44565 1.3307 6.64372 1.51453 6.64638 1.74475V3.56707C6.64016 3.79307 6.44476 3.97268 6.20673 3.97268C5.9687 3.97268 5.77331 3.79306 5.76619 3.56707C5.76708 3.11338 5.76619 2.20181 5.76619 1.74896ZM1.9345 3.86137C1.9345 3.56875 2.18409 3.3318 2.49227 3.3318H4.345C4.2846 3.83523 4.45335 4.34036 4.80863 4.71815C5.1639 5.09678 5.67283 5.31266 6.20661 5.31266C6.74039 5.31266 7.24932 5.09678 7.60459 4.71815C7.95986 4.34036 8.12862 3.83525 8.06734 3.3318H12.9595C12.8982 3.83523 13.067 4.34036 13.4223 4.71815C13.7775 5.09678 14.2864 5.31266 14.8202 5.31266C15.354 5.31266 15.8629 5.09678 16.2182 4.71815C16.5735 4.34036 16.7422 3.83525 16.6818 3.3318H18.5346C18.8428 3.3318 19.0923 3.56877 19.0923 3.86137V6.51689H1.93455L1.9345 3.86137ZM19.0923 18.1212C19.0923 18.413 18.8427 18.6499 18.5345 18.6508H2.49223C2.18402 18.6499 1.93446 18.413 1.93446 18.1212V7.86613H19.0923L19.0923 18.1212ZM13.4 9.5856C13.7828 9.59825 14.0866 9.89677 14.0866 10.2602C14.0866 10.6245 13.7828 10.9222 13.4 10.9348C13.0172 10.9222 12.7135 10.6245 12.7135 10.2602C12.7135 9.89677 13.0172 9.59825 13.4 9.5856ZM16.2865 9.5856C16.6693 9.59825 16.9731 9.89677 16.9731 10.2602C16.9731 10.6245 16.6693 10.9222 16.2865 10.9348C15.9037 10.9222 15.6 10.6245 15.6 10.2602C15.6 9.89677 15.9037 9.59825 16.2865 9.5856ZM10.5133 13.9336C10.1305 13.921 9.82673 13.6224 9.82673 13.259C9.82673 12.8947 10.1305 12.597 10.5133 12.5844C10.8961 12.597 11.1998 12.8947 11.1998 13.259C11.1998 13.6224 10.8961 13.921 10.5133 13.9336ZM13.3998 12.5844C13.7826 12.597 14.0863 12.8947 14.0863 13.259C14.0863 13.6224 13.7826 13.921 13.3998 13.9336C13.017 13.921 12.7132 13.6224 12.7132 13.259C12.7132 12.8947 13.017 12.597 13.3998 12.5844ZM16.2863 12.5844C16.6691 12.597 16.9728 12.8947 16.9728 13.259C16.9728 13.6224 16.6691 13.921 16.2863 13.9336C15.9035 13.921 15.5997 13.6224 15.5997 13.259C15.5997 12.8947 15.9035 12.597 16.2863 12.5844ZM4.74006 13.9336C4.35725 13.921 4.05351 13.6224 4.05351 13.259C4.05351 12.8947 4.35725 12.597 4.74006 12.5844C5.12286 12.597 5.42661 12.8947 5.42661 13.259C5.42661 13.6224 5.12286 13.921 4.74006 13.9336ZM7.62656 13.9336C7.24375 13.921 6.94001 13.6224 6.94001 13.259C6.94001 12.8947 7.24375 12.597 7.62656 12.5844C8.00936 12.597 8.31311 12.8947 8.31311 13.259C8.31311 13.6224 8.00936 13.921 7.62656 13.9336ZM10.5131 16.9315C10.1303 16.9189 9.82651 16.6203 9.82651 16.2569C9.82651 15.8926 10.1303 15.5949 10.5131 15.5823C10.8959 15.5949 11.1996 15.8926 11.1996 16.2569C11.1996 16.6203 10.8959 16.9189 10.5131 16.9315ZM13.3996 15.5823C13.7824 15.5949 14.0861 15.8926 14.0861 16.2569C14.0861 16.6203 13.7824 16.9189 13.3996 16.9315C13.0168 16.9189 12.713 16.6203 12.713 16.2569C12.713 15.8926 13.0168 15.5949 13.3996 15.5823ZM16.2861 15.5823C16.6689 15.5949 16.9726 15.8926 16.9726 16.2569C16.9726 16.6203 16.6689 16.9189 16.2861 16.9315C15.9033 16.9189 15.5995 16.6203 15.5995 16.2569C15.5995 15.8926 15.9033 15.5949 16.2861 15.5823ZM4.73983 16.9315C4.35703 16.9189 4.05328 16.6203 4.05328 16.2569C4.05328 15.8926 4.35703 15.5949 4.73983 15.5823C5.12264 15.5949 5.42638 15.8926 5.42638 16.2569C5.42638 16.6203 5.12264 16.9189 4.73983 16.9315ZM7.62633 16.9315C7.24353 16.9189 6.93978 16.6203 6.93978 16.2569C6.93978 15.8926 7.24353 15.5949 7.62633 15.5823C8.00914 15.5949 8.31288 15.8926 8.31288 16.2569C8.31288 16.6203 8.00914 16.9189 7.62633 16.9315ZM4.02929 10.2604C4.03728 9.89193 4.35082 9.59426 4.73983 9.58582H10.5131C10.8994 9.59425 11.2085 9.89362 11.2085 10.2604C11.2085 10.6273 10.8994 10.9275 10.5131 10.9351H4.73983C4.34993 10.9283 4.03638 10.6306 4.02929 10.2604Z"
      fill="black"
    />
  </Svg>
);

export const ForwardIcon = ({ color = "#7E8183" }) => {
  return (
    <Svg width="8" height="13" viewBox="0 0 8 13" fill={color}>
      <Path
        d="M0.953933 13C0.568052 12.9992 0.221919 12.7838 0.0745244 12.4553C-0.0728725 12.1268 0.00827833 11.7487 0.279887 11.4966L5.69638 6.49981L0.279887 1.503C0.101023 1.338 0 1.11417 0 0.881174C0 0.647419 0.100198 0.423598 0.27906 0.258583C0.650864 -0.0859392 1.25537 -0.0859391 1.628 0.257055L7.72094 5.8779C7.8998 6.04291 8 6.26674 8 6.49973C8 6.73272 7.8998 6.95654 7.72094 7.12156L1.628 12.7424C1.44996 12.9074 1.20732 13.0008 0.953933 13Z"
        fill={color}
      />
    </Svg>
  );
};

export const SearchIcon = () => (
  <Svg width="15" height="16" viewBox="0 0 15 16" fill="none">
    <Path
      d="M14.7968 14.2022L11.9974 11.4318C14.122 8.78619 13.922 4.89268 11.4975 2.47171C10.2228 1.19884 8.54816 0.5 6.74855 0.5C4.94894 0.5 3.2493 1.19884 1.97458 2.47171C0.699849 3.74459 0 5.41681 0 7.23877C0 9.06073 0.699849 10.7329 1.97458 12.0058C3.2493 13.2537 4.92394 13.9775 6.74855 13.9775C8.27322 13.9775 9.7729 13.4534 10.9476 12.505L13.722 15.2754C13.872 15.4251 14.047 15.5 14.2469 15.5C14.4469 15.5 14.6468 15.4251 14.7718 15.2754C15.0718 14.9759 15.0718 14.5017 14.7968 14.2022ZM11.9974 7.23877C11.9974 8.63644 11.4475 9.95923 10.4478 10.9326C9.44797 11.906 8.14825 12.48 6.74855 12.48C5.34885 12.48 4.02413 11.9309 3.04934 10.9326C2.07455 9.93428 1.49968 8.63644 1.49968 7.23877C1.49968 5.8411 2.04956 4.5183 3.04934 3.54493C4.04913 2.57155 5.32385 1.9975 6.74855 1.9975C8.14825 1.9975 9.47296 2.54659 10.4478 3.54493C11.4225 4.54326 11.9974 5.81614 11.9974 7.23877Z"
      fill="#7E8183"
    />
  </Svg>
);

export const LeftArrow = () => (
  <Svg width="8" height="12" viewBox="0 0 8 12" fill="none" >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.79318 11.7769C7.50435 12.0613 7.02044 12.0757 6.71235 11.8091L4.17446e-08 6L6.71235 0.190917C7.02044 -0.0757164 7.50435 -0.0613056 7.79318 0.223104C8.08202 0.507512 8.06641 0.954219 7.75832 1.22085L2.23605 6L7.75832 10.7791C8.06641 11.0458 8.08202 11.4925 7.79318 11.7769Z"
      fill="#00A8A8"
    />
  </Svg>
);

export const RightArrow = () => (
  <Svg width="9" height="12" viewBox="0 0 9 12" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.985136 11.7769C1.27397 12.0613 1.75788 12.0757 2.06597 11.8091L8.77832 6L2.06597 0.190917C1.75788 -0.075716 1.27397 -0.061306 0.985136 0.223104C0.696299 0.507512 0.711909 0.954219 1.02 1.22085L6.54227 6L1.02 10.7791C0.711909 11.0458 0.696299 11.4925 0.985136 11.7769Z"
      fill="#00A8A8"
    />
  </Svg>
);

export const DoubleArrowIcon = () => (
    <Svg width="8" height="8" viewBox="0 0 8 8" fill="none" >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.89659 7.85126C7.75217 8.04087 7.51022 8.05048 7.35617 7.87272L4 4L7.35617 0.127278C7.51022 -0.0504779 7.75217 -0.0408707 7.89659 0.148735C8.04101 0.338341 8.03321 0.636146 7.87916 0.813901L5.11803 4L7.87916 7.1861C8.03321 7.36385 8.04101 7.66166 7.89659 7.85126Z"
        fill="#3C3C43"
        fillOpacity="0.6"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.89659 7.85126C3.75217 8.04087 3.51022 8.05048 3.35617 7.87272L2.08723e-08 4L3.35617 0.127278C3.51022 -0.0504779 3.75217 -0.0408707 3.89659 0.148735C4.04101 0.338341 4.03321 0.636146 3.87916 0.813901L1.11803 4L3.87916 7.1861C4.03321 7.36385 4.04101 7.66166 3.89659 7.85126Z"
        fill="#3C3C43"
        fillOpacity="0.6"
      />
    </Svg>
);

export const NotificationIcon = () => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="#F8F9FA" stroke="black" />
      <Path
        d="M26.9015 20.2824C26.8094 19.8671 26.7634 19.4385 26.7634 19.0126V18.2771C26.7607 14.6317 23.7263 11.666 19.9988 11.666C16.2713 11.666 13.2342 14.6317 13.2342 18.2771V19.0126C13.2342 19.4385 13.1882 19.8671 13.0961 20.2824L12.5385 22.8141C12.368 23.5893 12.7767 24.3856 13.513 24.7109C14.5335 25.1607 15.6108 25.5046 16.7098 25.7348C17.0374 27.2268 18.3881 28.3327 20.0015 28.3327C21.6148 28.3327 22.9629 27.2269 23.2903 25.7375C24.3866 25.5073 25.4612 25.166 26.4818 24.7137C27.2208 24.3883 27.6322 23.5893 27.4617 22.8141L26.904 20.2824H26.9015ZM19.9988 27.0099C19.2354 27.0099 18.5695 26.5945 18.2284 25.9808C18.7833 26.0443 19.341 26.076 19.8959 26.0813H19.996C20.5861 26.0813 21.179 26.0443 21.769 25.9781C21.4279 26.5945 20.7622 27.0099 19.9988 27.0099ZM25.9216 23.5071C24.625 24.0786 22.5487 24.7558 19.9962 24.7558H19.9041C17.9119 24.7426 15.8951 24.3114 14.0707 23.5045C13.911 23.4331 13.8244 23.2611 13.8623 23.0918L14.4199 20.5601C14.5336 20.0521 14.5877 19.531 14.5877 19.0098V18.2744C14.5877 15.359 17.0159 12.9861 19.9988 12.9861C22.9817 12.9861 25.4099 15.3592 25.4099 18.2744V19.0098C25.4099 19.531 25.4667 20.0521 25.5777 20.5601L26.1353 23.0918C26.1732 23.2638 26.084 23.4331 25.9216 23.5071Z"
        fill="black"
      />
    </Svg>
  );
};


export const Tablet =()=>(
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" >
    <Rect width="32" height="32" rx="8" fill="#22C06C" />
    <Path
      d="M20.3473 18.2228L20.3472 18.2228L16.8754 23.15L16.8754 23.1501C16.413 23.8052 15.7998 24.3393 15.0875 24.7075C14.3754 25.0755 13.5852 25.2668 12.7836 25.2651C12.7834 25.2651 12.7832 25.2651 12.783 25.2651L12.7835 25.0651L20.3473 18.2228ZM20.3473 18.2228L23.2906 14.0442L20.3473 18.2228ZM22.0775 7.10357L22.0776 7.1036C22.614 7.47877 23.0711 7.95621 23.4226 8.50849C23.7741 9.06078 24.0131 9.67704 24.1258 10.3219C24.2385 10.9668 24.2227 11.6276 24.0794 12.2663C23.9361 12.9051 23.6681 13.5092 23.2907 14.0441L22.0775 7.10357ZM22.0775 7.10357C20.9935 6.34585 19.6536 6.04781 18.3506 6.27452C17.0476 6.50122 15.8871 7.23425 15.1227 8.31357L15.1224 8.31397M22.0775 7.10357L15.1224 8.31397M15.1224 8.31397L11.7937 13.0382M15.1224 8.31397L11.7937 13.0382M9.57853 18.0344L9.57848 18.0345C9.28208 18.4548 9.07159 18.9296 8.9591 19.4315C8.84661 19.9334 8.83432 20.4526 8.92295 20.9593C9.01158 21.4659 9.19938 21.9501 9.47557 22.3841C9.75176 22.818 10.1109 23.1931 10.5324 23.4879L9.57853 18.0344ZM9.57853 18.0344L12.5514 13.8146L15.7636 16.0668L15.7637 16.0668L18.975 18.3187L16.003 22.5351C15.402 23.3845 14.4893 23.9615 13.4643 24.14M9.57853 18.0344L13.4643 24.14M11.7937 13.0382L11.7937 13.0382L11.7937 13.0382ZM13.4643 24.14C12.4392 24.3185 11.3852 24.0841 10.5324 23.4879L13.4643 24.14ZM16.3775 15.1942L13.1661 12.9424L15.9935 8.92896C15.9935 8.92887 15.9936 8.92879 15.9936 8.92871C16.5951 8.07965 17.5081 7.50303 18.5332 7.32477C19.5584 7.14648 20.6126 7.38111 21.4654 7.97741L21.4654 7.97741C21.8869 8.27207 22.246 8.64706 22.5222 9.08088C22.7984 9.5147 22.9861 9.99879 23.0747 10.5054C23.1633 11.0119 23.1509 11.531 23.0384 12.0328C22.9258 12.5346 22.7152 13.0092 22.4187 13.4294L22.4186 13.4295L19.5897 17.4465L16.3775 15.1943L16.3775 15.1942Z"
      fill="white"
      stroke="#F8F9FA"
      strokeWidth="0.4"
    />
  </Svg>
)