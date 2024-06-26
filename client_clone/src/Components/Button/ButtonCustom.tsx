import React from "react";

interface Props {
  border?: string;
  cursor?: string;
  color?: string;
  textColor?: string;
  margin?: string;
  fontSize?: string;
  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
  children?: React.ReactNode | string;
  height?: string;
  onClick: () => void;
  radius?: string;
  width?: string;
  display?: string; // Thêm thuộc tính display tùy chọn
  alignItems?: "center" 
  justifyContent?:"space-around" | "center" | "flex-start" | "flex-end"
  flexDirection?: "row" | "column" 
}

const ButtonCustom: React.FC<Props> = ({
  border,
  color,
  cursor,
  textColor,
  margin,
  fontSize,
  textAlign,
  children,
  height,
  onClick,
  radius,
  width,
  display,
  justifyContent,
  flexDirection,
  alignItems,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: textColor,
        margin,
        fontSize,
        textAlign,
        border,
        borderRadius: radius,
        height,
        width,
        display,
        cursor,
        justifyContent,
        flexDirection,
        alignItems,
      }}
    >
      {typeof children === 'string' ? (
        <span>{children}</span> // Nếu là chuỗi, hiển thị như bình thường
      ) : (
        children // Nếu là một React component khác, hiển thị nó mà không cần thay đổi
      )}
    </button>
  );
};

export default ButtonCustom;