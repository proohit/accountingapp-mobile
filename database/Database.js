import * as DocumentPicker from 'expo-document-picker'
import * as SQLite from 'expo-sqlite'
import * as FileSystem from 'expo-file-system'
let db;
const sqliteDirectory = `${FileSystem.documentDirectory}SQLite`;
const pathToDownloadTo = `${sqliteDirectory}/sample1.db`;
let fileUri = ''


export let getAllMonths = async () => {
    db.transaction(txn => {
        console.log('txn', txn);
        txn.executeSql("select DISTINCT strftime('%Y-%m',timestamp) as month from Record ORDER BY month desc", [], (txn, rs) => {
            return rs.rows;
        })
    })
}
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
export let overrideDb = async () => {
    await FileSystem.downloadAsync(
        pathToDownloadTo,
        fileUri
    );
}
export let openFile = async () => {

    const { exists, isDirectory } = await FileSystem.getInfoAsync(
        sqliteDirectory
    );

    if (!exists) {
        await FileSystem.makeDirectoryAsync(sqliteDirectory);
    }

    const result = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: false });

    fileUri = result.uri

    const copyResult = await FileSystem.copyAsync({
        from: fileUri,
        to: pathToDownloadTo,
    });

    db = SQLite.openDatabase('sample1.db');

    //  console.log('path',pathToDownloadTo');
}
