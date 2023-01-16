import SQLite from "react-native-sqlite-storage"


export const db = SQLite.openDatabase(
    {
        name:"MainDB",
        location:"default"
    },
    ()=>{},
    (error) => {console.log(error.message)}
    
    )

export const createTable = () => {
    try {
        db.transaction(transaction =>{
            transaction.executeSql("CREATE TABLE IF NOT EXISTS"
                                    +"Users"
                                    +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Email TEXT, Password TEXT);"                        
            
            )
        })
    } catch (error) {
        console.log(error.message)
    }
    }
export const insertTntoTable = async (Email,Password) => {
    try {
        await db.transaction(async(transaction )=> {
            await transaction.executeSql("INSERT INTO Users (Email,Password) VALUES (?,?)",[Email,Password])
        })
    } catch (error) {
        console.log(error.message);
    }
    } 


export const showTable = () =>{
    db.transaction(async(transaction) => {
        let returnValue = transaction.executeSql("SELECT Email,Password FROM Users",[],(statement,results)=>{
            let lens = results.rows.length;
            if (lens > 0) {
                let Email = results.rows.item(0).Email;
                return Email;
            }
        })
        return returnValue
    })
}

export default db; 