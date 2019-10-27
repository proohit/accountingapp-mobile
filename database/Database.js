import * as DocumentPicker from 'expo-document-picker'
import * as SQLite from 'expo-sqlite'
import * as FileSystem from 'expo-file-system'
let db; 
export let selectAllRecords = async () => {
    console.log(`select command: ${db}`);
    db.transaction(txn => {
        console.log('txn', txn);
        txn.executeSql('SELECT * FROM Record', [], (txn, rs) => {
            console.log('executeSql');
            console.log(rs.rows)
        })
    })
}
export let deleteAllRecords = async () => {
    console.log(`delete command: ${db}`);
    db.transaction(txn => {
        console.log('txn', txn);
        txn.executeSql('DELETE FROM Record', [], (txn, rs) => {
            console.log('executeSql');
            console.log(rs.rows)
        })
    })
}

export let openFile = async() => {
    const sqliteDirectory = `${FileSystem.documentDirectory}SQLite`;

    const { exists, isDirectory } = await FileSystem.getInfoAsync(
        sqliteDirectory
    );

    if (!exists) {
        await FileSystem.makeDirectoryAsync(sqliteDirectory);
    }

    const pathToDownloadTo = `${sqliteDirectory}/sample1.db`;

    const result = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: false });
    console.log(result.uri);
    const copyResult = await FileSystem.copyAsync({
        from: result.uri,
        to: pathToDownloadTo,
    });

    db = SQLite.openDatabase('sample1.db');
    
    //  console.log('path',pathToDownloadTo');
}
