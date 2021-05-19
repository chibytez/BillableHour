// import dialog from './helper'

describe('ATOMATION OF BILLABLE HOUR MOBILE APP', () => {

    it("should get Company details", () => {
        const field = $("android.widget.EditText");
        field.setValue("/storage/emulated/0/sample2.csv");
        const conButton = $('android.view.View[@index="3"]');
        conButton.click()
        const getDetail = $('android.view.View[@index="5"]');
        getDetail.click()

        browser.pause(3000)
       
    })
})