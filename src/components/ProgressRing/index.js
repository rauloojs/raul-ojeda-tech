// Inspired by https://css-tricks.com/building-progress-ring-quickly/
import React, { Component } from 'react';

export default class ProgressRing extends Component {
  constructor(props) {
    super(props);

    const { radius, stroke } = this.props;

    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  render() {
    const { radius, stroke, progress } = this.props;

    const strokeDashoffset = this.circumference - progress / 100 * this.circumference;

    return (
      <svg
        height={radius * 2}
        width={radius * 2}
        style={{
          transform: 'rotate(270deg)'
        }}
       >
        <circle
          stroke="#318ada"
          fill="transparent"
          strokeWidth={ stroke }
          strokeDasharray={ this.circumference }
          strokeDashoffset={ strokeDashoffset }
          r={ this.normalizedRadius }
          cx={ radius }
          cy={ radius }
         />
      </svg>
    );
  }
}