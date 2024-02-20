import AsyncStorage from "@react-native-async-storage/async-storage";

 const useStorage = () => {

    const getItem = async (key) => {
        try{
            const password = await AsyncStorage.getItem(key);
            return JSON.parse(password) || [];

        }catch(error){
            console.log("erro ao buscar", error)
            return[];
        }
    }


    const saveItem = async (key, value) => {
        try{
            let passwords = await getItem(key);

            passwords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwords))

        }catch(error){
            console.log("erro ao salvar", error)
        }

    }

    const removeItem = async (key, item) => {
        try{
            let passwords = await getItem(key);

            let myPasswords = passwords.filter((password) => {
                return (password !== item)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))

            return myPasswords;

        }catch(error){
            console.log("erro ao deletar", error)
        }


    }

    return {
        getItem,
        saveItem,
        removeItem,
    }
 }

 export default useStorage;