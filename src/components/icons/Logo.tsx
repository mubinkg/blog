import React from 'react'

const Logo = () => {
    return (
        <div>
            <svg
                width={50}
                height={62}
                viewBox="0 0 50 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g filter="url(#filter0_b_6035_6594)">
                    <rect width={50} height={62} fill="url(#pattern0_6035_6594)" />
                </g>
                <defs>
                    <filter
                        id="filter0_b_6035_6594"
                        x={-20}
                        y={-20}
                        width={90}
                        height={102}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_6035_6594"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_6035_6594"
                            result="shape"
                        />
                    </filter>
                    <pattern
                        id="pattern0_6035_6594"
                        patternContentUnits="objectBoundingBox"
                        width={1}
                        height={1}
                    >
                        <use
                            xlinkHref="#image0_6035_6594"
                            transform="matrix(0.0125253 0 0 0.010101 -0.0010101 0)"
                        />
                    </pattern>
                    <image
                        id="image0_6035_6594"
                        width={80}
                        height={99}
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABjCAYAAAAM/4euAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkwNDQwRkM3QTc5NzExRThBMDlDRDE2N0VEQTVEQ0E0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkwNDQwRkM4QTc5NzExRThBMDlDRDE2N0VEQTVEQ0E0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTA0NDBGQzVBNzk3MTFFOEEwOUNEMTY3RURBNURDQTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTA0NDBGQzZBNzk3MTFFOEEwOUNEMTY3RURBNURDQTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6W2eHSAAAWjElEQVR42uxdW5Mkx1U+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"
                    />
                </defs>
            </svg>
        </div>
    )
}

export default Logo
