const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName,"This is a new text",()=>{
        
	})
}
myFileWriter("newFile.txt")

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const fileReader = await fs.readFile(fileName, 'utf-8', ()=>{
	  	
	})
	console.log(fileReader)


}
myFileReader('newFile.txt')


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName,"This is a updated text")

}
myFileUpdater('newFile.txt')

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
   await	fs.unlink(fileName)
}
myFileDeleter("sample.txt")



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }