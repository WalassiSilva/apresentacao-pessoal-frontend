// eslint-disable-next-line react/prop-types
export default function Background({ left, right, top, size = 500 }) {
  const positionStyles = {
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    zIndex: -1,
  };

  if (left !== undefined) {
    positionStyles.left = `${left}px`;
  }

  if (right !== undefined) {
    positionStyles.right = `${right}px`;
  }

  return <div className="shiny-effect overflow-hidden" style={positionStyles}></div>;
}
