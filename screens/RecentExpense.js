import {View,Text} from 'react-native'
import ExpenseOutput from '../components/ExpensesOutput/ExpensesOutput'
function RecentExpense(){
    return(
        <ExpenseOutput periodName="Last 7 days expense"/>
    )
}
export default RecentExpense