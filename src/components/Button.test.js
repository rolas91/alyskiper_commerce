const Button = require("./Button")
// @ponicode
describe("Button.style", () => {
    test("0", () => {
        let callFunction = () => {
            Button.style({ fontSize: "right", bborder: "Sei Whale", borderRadius: "Nile Crocodile", marginBottom: "139.3.227.118", marginTop: 1, colorfondo: "False Killer Whale", marginLeft: "201.100.244.168", height: 16, marginRight: "18.12.93.94", borderColor: "rgb(0,100,200)", textcolor: "rgb(0.1,0.2,0.3)", width: 400, borderWidth: 480, padding: 2048 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Button.style({ fontSize: "edge", bborder: "Amazon River Dolphin", borderRadius: "Dwarf Crocodile", marginBottom: "139.3.227.118", marginTop: 1, colorfondo: "Amazon River Dolphin", marginLeft: "18.12.93.94", height: 576, marginRight: "139.3.227.118", borderColor: "rgb(0.1,0.2,0.3)", textcolor: "rgb(0,100,200)", width: 80.0, borderWidth: 390, padding: 1.5 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Button.style({ fontSize: "end", bborder: "La Plata Dolphin", borderRadius: "Saltwater Crocodile", marginBottom: "240.159.249.190", marginTop: 0, colorfondo: "Amazon River Dolphin", marginLeft: "139.3.227.118", height: 25, marginRight: "139.3.227.118", borderColor: "red", textcolor: "hsl(10%,20%,40%)", width: 100, borderWidth: 390, padding: 25 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Button.style({ fontSize: "right", bborder: "Sei Whale", borderRadius: "Saltwater Crocodile", marginBottom: "139.3.227.118", marginTop: 1, colorfondo: "Sei Whale", marginLeft: "240.159.249.190", height: 100, marginRight: "244.9.255.240", borderColor: "#FF00FF", textcolor: "hsl(10%,20%,40%)", width: 120, borderWidth: 15, padding: 64 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Button.style({ fontSize: "center", bborder: "Amazon River Dolphin", borderRadius: "Australian Freshwater Crocodile", marginBottom: "18.12.93.94", marginTop: -100, colorfondo: "La Plata Dolphin", marginLeft: "139.3.227.118", height: 1000, marginRight: "139.3.227.118", borderColor: "rgb(0,100,200)", textcolor: "red", width: 9, borderWidth: 8, padding: 40 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Button.style({ fontSize: "", bborder: "", borderRadius: "", marginBottom: "", marginTop: -Infinity, colorfondo: "", marginLeft: "", height: -Infinity, marginRight: "", borderColor: "", textcolor: "", width: -Infinity, borderWidth: -Infinity, padding: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})
