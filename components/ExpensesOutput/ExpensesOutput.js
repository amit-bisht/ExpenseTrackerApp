import { View,StyleSheet } from "react-native"
import { GlobalStyles } from "../../constants/styles"
import ExpenseList from "./ExpensesList"
import ExpensesSummary from "./ExpensesSummary"
function ExpenseOutput({expenses,periodName}){
    const DUMMY_EXPENSES=[
        {id:'e1',description:'A pair of shoes',amount:59.99,date:new Date('2022-01-12')},
        {id:'e2',description:'A pair of Mobei',amount:59.99,date:new Date('2022-12-12')},
        {id:'e3',description:'A pair of trouses',amount:59.99,date:new Date('2022-12-12')},
        {id:'e4',description:'A pair of napkin',amount:59.99,date:new Date('2022-12-12')},
        {id:'e5',description:'A pair of shoes',amount:59.99,date:new Date('2022-12-12')}
    ]
    return(
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName}/>
            <ExpenseList expenses={DUMMY_EXPENSES}/>
        </View>

    )
}
export default ExpenseOutput
const styles=StyleSheet.create({
    container:{
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700,
        flex:1
    }
})