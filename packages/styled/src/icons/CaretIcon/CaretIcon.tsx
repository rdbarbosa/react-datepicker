import React from 'react'
import styled, {css} from 'styled-components'

interface SvgProps {
  angle: number
}
const Svg = styled('svg')<SvgProps>`
  ${({angle}) =>
    css`
      transform: rotate(${angle}deg);
    `}
`

interface Props extends IconProps {
  direction?: 'up' | 'down' | 'left' | 'right'
}

function calculateAngle(direction: Props['direction']) {
  switch (direction) {
    case 'up':
      return 180
    case 'down':
      return 0
    case 'left':
      return 90
    case 'right':
    default:
      return -90
  }
}

function CaretIcon({height, width, color, direction = 'right', className = ''}: Props) {
  const angle = calculateAngle(direction)
  return (
    <Svg
      width={width}
      height={height}
      color={color}
      className={className}
      angle={angle}
      viewBox="0 0 9 6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.058 4.594L1.185 1.72a.312.312 0 1 1 .442-.442L4.5 4.152l2.873-2.873a.312.312 0 1 1 .442.442L4.723 4.812a.316.316 0 0 1-.446 0l-.219-.218z"
      />
    </Svg>
  )
}

export default CaretIcon
