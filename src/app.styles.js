import styled, { css } from 'styled-components'

export const Board = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: #f3f3f3;
    background-image: url('bg-dots--green.jpg');
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
    gap: 20px;
    padding: 0;
`

export const Header = styled(Grid)`
    margin: 20px 0 40px;
`

const getBackgroundColor = (variant) => {
    switch (variant) {
        case 1: // monday
            return 'LimeGreen'
        case 2: // tuesday
            return 'Fuchsia'
        case 3: // wednesday
            return 'RoyalBlue'
        case 4: // thursday
            return 'FireBrick'
        case 5: // friday
            return 'DarkOrange'
        case 6: // saturday
            return 'DarkSlateBlue'
        case 0: // sunday
        default:
            return 'SaddleBrown'
    }
}
export const HeaderItem = styled.div`
    list-style-type: none;
    border-radius: 5px;
    padding: 10px;
    color: white;
    text-align: center;

    ${({ variant }) => css`
        background-color: ${getBackgroundColor(variant)};
    `}
`

export const Days = styled(Grid)``

export const Day = styled.div`
    position: relative;
    height: 250px;
    border-radius: 15px;
    background-color: white;
    // box-shadow: 1px 3px 10px rgb(0 0 0 / 50%);
`

export const DatePill = styled.div`
    height: 50px;
    width: 50px;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const DayOfMonth = styled.div`
    color: #333;
`

export const MonthName = styled.div`
    font-size: 12px;
    font-weight: thin;
`

export const Avatars = styled.div`
    position: absolute;
    height: 50px;
    right: -5px;
    bottom: -7px;
`
export const Avatar = styled.div`
    display: inline-block;
    position: relative;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background-size: 100%;
    // box-shadow: 1px 3px 10px rgb(0 0 0 / 50%);
`

export const Maaike = styled(Avatar)`
    background-image: url('maaike.jpg');
`

export const Richard = styled(Avatar)`
    background-image: url('richard.jpg');
`

export const Unknown = styled(Avatar)`
    text-align: center;
    line-height: 50px;
    font-size: 30px;
    background-color: #4ba876;
    color: #fff;
`
