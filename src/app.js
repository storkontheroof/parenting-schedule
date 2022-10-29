import * as Styled from './app.styles.js'
import addDays from 'date-fns/addDays'
import formatDate from 'date-fns/format'
import * as locales from 'date-fns/locale'

const startDate = new Date('2022-10-31')
const numWeeksToShow = 4
const firstDayOfWeek = 1 // e.g. monday
const locale = locales['nl']

const daysMaaike = [
    '2022-10-31',
    '2022-11-05',
    '2022-11-06',
    '2022-11-07',
    '2022-11-12',
    '2022-11-13',
    '2022-11-14',
    '2022-11-18',
    '2022-11-19',
    '2022-11-22',
    '2022-11-23',
    '2022-11-27',
    '2022-11-28',
    '2022-11-29',
    '2022-11-30',
    '2022-12-04',
    '2022-12-05',
    '2022-12-06',
    '2022-12-10',
    '2022-12-11',
    '2022-12-12',
    '2022-12-16',
    '2022-12-17',
    '2022-12-21',
    '2022-12-22',
    '2022-12-23',
]
const daysRichard = [
    '2022-11-01',
    '2022-11-02',
    '2022-11-03',
    '2022-11-04',
    '2022-11-08',
    '2022-11-09',
    '2022-11-10',
    '2022-11-11',
    '2022-11-15',
    '2022-11-16',
    '2022-11-17',
    '2022-11-20',
    '2022-11-21',
    '2022-11-24',
    '2022-11-25',
    '2022-11-26',
    '2022-11-28',
    '2022-11-29',
    '2022-12-01',
    '2022-12-02',
    '2022-12-03',
    '2022-12-04',
    '2022-12-07',
    '2022-12-08',
    '2022-12-09',
    '2022-12-13',
    '2022-12-14',
    '2022-12-15',
    '2022-12-18',
    '2022-12-19',
    '2022-12-20',
]

const inDaysMaaike = (date) => {
    return daysMaaike.includes(formatDate(date, 'yyyy-MM-dd'))
}

const inDaysRichard = (date) => {
    return daysRichard.includes(formatDate(date, 'yyyy-MM-dd'))
}

const Avatars = ({ date }) => {
    return (
        <Styled.Avatars>
            {inDaysMaaike(date) && <Styled.Maaike></Styled.Maaike>}

            {inDaysRichard(date) && <Styled.Richard></Styled.Richard>}

            {!inDaysMaaike(date) && !inDaysRichard(date) && (
                <Styled.Unknown>?</Styled.Unknown>
            )}
        </Styled.Avatars>
    )
}

console.log({ arr: Array(7 * numWeeksToShow) })

function App() {
    return (
        <Styled.Board>
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
