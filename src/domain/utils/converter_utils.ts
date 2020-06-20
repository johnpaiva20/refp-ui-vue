
export default class ConverterUtil {

    static async getBase64Promise(file: File) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (reader.result) {
                    resolve(reader.result.toString().replace(/^data:.+;base64,/, ''))
                }
            };
            reader.onerror = error => reject(error);
        });
    }
}







