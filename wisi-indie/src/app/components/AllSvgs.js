const LogoSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={33}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill}
      d="M9.627.854C5.95 1.865 3.23 3.808 1.425 6.764.141 8.884-.359 12.117.272 14.358c.566 2.003 1.958 4.382 3.72 6.385 1.24 1.428 1.719 2.162 2.11 3.233.5 1.408.566 2.816.13 3.55-.173.277-.108.495.218.892.261.337.392.734.327 1.031-.174.893 1.48 1.765 3.35 1.765.587 0 .718.1.935.694.283.794.762 1.091 1.74 1.091.915 0 1.459-.297 1.959-1.051.37-.555.63-.655 2.197-.972 2.328-.456 2.894-.793 2.741-1.606-.043-.357.044-.813.218-1.071.24-.317.26-.535.087-.813-.109-.198-.152-.575-.087-.793.065-.238 0-.575-.152-.734-.218-.238-.218-.496-.044-1.15.13-.456.283-1.17.348-1.567.13-.892 1.893-3.094 3.111-3.907 1.48-.991 2.393-2.062 2.654-3.192.13-.556.196-1.091.153-1.15-.044-.08-.196-1.31-.327-2.757-.283-2.896-.609-4.105-1.61-6.01-1.349-2.518-4.547-4.739-7.788-5.453-1.87-.396-4.96-.357-6.635.08Zm7.788 1.308c2.589.952 4.525 2.618 5.743 4.919 1.023 1.943.936 2.28-.174.733-1.196-1.646-3.611-3.966-4.982-4.779a18.685 18.685 0 0 0-2.327-1.09c-1.175-.457-1.197-.477-.37-.358.478.08 1.436.337 2.11.575Zm-1.131 1.111c2.74 1.19 5.069 3.45 6.81 6.624 1.152 2.122 1.283 2.736.913 4.362-.588 2.539-1.675 4.006-4.634 6.227-1.37 1.032-2.175 2.063-2.306 2.995-.065.377-.152.833-.24 1.011-.173.437-1.196.853-1.479.595-.217-.198-.065-7.674.174-8.606.153-.516.218-.536 1.414-.536 1.523 0 2.393-.496 2.393-1.388 0-.317.11-.635.218-.694.392-.218.24-1.606-.24-2.182-.39-.436-.587-.515-1.152-.416-.784.139-2.154 1.309-2.546 2.122-.283.634-.74.714-1.392.258-.326-.218-.37-.337-.152-.456.37-.199.696-1.31.696-2.36 0-1.071-.892-2.023-1.914-2.023-.806 0-1.763.952-1.806 1.745-.044.992.065 1.884.283 2.4.152.396.13.555-.175.753-.587.397-.891.317-1.022-.297-.218-.912-1-1.825-1.784-2.142-.653-.238-.87-.238-1.501 0-.892.337-1.044.555-1.044 1.408 0 1.388 1.436 2.677 2.958 2.677.697 0 .784.06.892.635.066.357.131 2.558.174 4.878.044 4.68.11 4.522-1.457 3.927-.718-.278-.936-.615-1.414-2.221-.152-.516-.718-1.31-1.567-2.182-1.653-1.705-3.132-4.382-3.48-6.326-.5-2.717.826-6.286 3.22-8.646 2.175-2.142 4.394-2.995 7.57-2.896 1.74.04 2.176.14 3.59.754Zm-2.698 7.754c.174.496-.304 1.547-.696 1.547-.174 0-.479-.317-.674-.714-.37-.694-.37-.714.108-1.09.566-.417 1.045-.318 1.262.257Zm-4.72 2.221c.26.357.456.714.456.793 0 .218-.848.12-1.632-.158-.826-.318-.979-.774-.413-1.329.457-.456.957-.238 1.588.694Zm9.81-.773c.414.436.044.654-.913.555-.848-.1-.892-.357-.087-.654.653-.238.696-.238 1 .099Zm-.652 1.467c0 .179-.74.417-1.349.417-.217 0-.391-.08-.391-.179 0-.099.174-.238.391-.277.675-.16 1.35-.14 1.35.04Zm-4.895 1.012c.218.218.566.436.762.495.37.1.37.179-.022 1.31-.587 1.685-.914 4.72-.761 6.782l.13 1.745-.935-.06-.914-.06-.044-2.577c-.043-2.598-.413-6.584-.63-7.14-.088-.198.087-.396.587-.595 1-.376 1.37-.376 1.827.1Zm4.569.198c-.065.1-.544.178-1.044.178-.87-.02-.87-.04-.262-.178.958-.218 1.458-.218 1.306 0Zm-3.329 7.992c.044 1.586 0 2.122-.195 2.122-.218 0-.283-.635-.283-2.558 0-2.777.283-4.86.37-2.797.043.595.087 2.043.108 3.233Zm4.395.198c-.087.516-.283 1.09-.435 1.27-.261.317-.283.317-.305-.18 0-.534.631-2.22.783-2.081.044.04.022.495-.043.991Zm-5.439 2.975c3.698-.04 3.894-.02 3.524.297-.304.298-.848.337-4.002.337-2.459 0-3.895-.079-4.439-.257-1.261-.417-1.283-.694-.043-.496.587.08 2.828.139 4.96.119Zm5.352.02c0 .337-.305.575-.5.396-.175-.158.065-.674.304-.674.109 0 .196.12.196.278Zm-6.135 1.666c2.437.04 4.394.158 4.394.257 0 .258-7.527.218-8.528-.02-.456-.118-.87-.317-.957-.436-.109-.158-.043-.178.261-.06.218.1 2.393.219 4.83.259Zm-.152 1.447c1.958.02 3.785-.02 4.068-.099.609-.178.63.178.022.476-.697.357-7.093.357-7.963.02-.827-.298-.979-.714-.217-.536.282.06 2.132.12 4.09.14Zm1.283 1.944c0 .337-.413.456-1.088.317-.935-.178-.805-.496.218-.496.479 0 .87.08.87.179Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={12.721}
        x2={12.047}
        y1={37.819}
        y2={-20.778}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.047} stopColor="#E4E4E7" stopOpacity={0} />
        <stop offset={0.51} stopColor="#E4E4E7" />
      </linearGradient>
    </defs>
  </svg>
)
export default LogoSvg;



