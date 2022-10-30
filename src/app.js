import addDays from 'date-fns/addDays'
import formatDate from 'date-fns/format'

import * as Styled from './app.styles.js'
import { useAppContext } from './app.state'

const inDays = (days, date) => {
    return days.includes(formatDate(date, 'yyyy-MM-dd'))
}

const Avatars = ({ date }) => {
    const {
        state: { parentOne, parentTwo },
    } = useAppContext()

    const isInDaysParentOne = inDays(parentOne.days, date)
    const isInDaysParentTwo = inDays(parentTwo.days, date)

    return (
        <Styled.Avatars>
            {isInDaysParentOne && <Styled.Avatar image={parentOne.avatar} />}

            {isInDaysParentTwo && <Styled.Avatar image={parentTwo.avatar} />}

            {!isInDaysParentOne && !isInDaysParentTwo && (
                <Styled.Unknown>?</Styled.Unknown>
            )}
        </Styled.Avatars>
    )
}

function App() {
    const {
        state: { startDate, numWeeksToShow, locale, bgImage },
    } = useAppContext()

    return (
        <Styled.Board image={bgImage}>
            <Styled.Header>
                {[0, 1, 2, 3, 4, 5, 6].map((day) => {
                    const date = addDays(startDate, day)

                    return (
                        <Styled.HeaderItem variant={day} key={day}>
                            {formatDate(date, 'eeee', { locale: locale })}
                        </Styled.HeaderItem>
                    )
                })}
            </Styled.Header>
            <Styled.Days>
                {[...Array(7 * numWeeksToShow)].map((val, index) => {
                    const date = addDays(startDate, index)

                    return (
                        <Styled.Day key={index}>
                            <Styled.DatePill>
                                <Styled.DayOfMonth>
                                    {formatDate(date, 'dd', { locale: locale })}
                                </Styled.DayOfMonth>
                                <Styled.MonthName>
                                    {formatDate(date, 'MMM', {
                                        locale: locale,
                                    })}
                                </Styled.MonthName>
                            </Styled.DatePill>
                            <Avatars date={date} />
                        </Styled.Day>
                    )
                })}
            </Styled.Days>
        </Styled.Board>
    )
}

export default App
