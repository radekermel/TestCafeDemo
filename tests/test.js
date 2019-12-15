import MainPage from "./pages/MainPage";
import {Selector} from "testcafe";

fixture`Getting Started`
    .page`http://devexpress.github.io/testcafe/example`;

test('Do everything test to check failing rate of more complex tests', async t => {
    await t
        .maximizeWindow()
        .typeText(MainPage.inputDevName, MainPage.devName)
        .click(MainPage.backgroundParalelTestinfCheckbox)
        .click(MainPage.contiuesIntegrationEmbeddingCheckbox)
        .click(MainPage.remoteTestingCheckbox)
        .click(MainPage.reusingJsCodeCheckbox)
        .click(MainPage.traficMarkupAnalasysCheckbox)
        .click(MainPage.windowsRadio)
        .click(MainPage.trialOfTestcafeCheckbox)
        .drag(
            MainPage.slider,
            MainPage.dragSliderXDirection,
            MainPage.dragSliderYDirection,
            {
                offsetX: 10,
                offsetY: 10
            }
        )
        .expect(MainPage.slider.getAttribute('style')).eql(MainPage.sliderStyleAtributeValue, "Check if slider has moved")
        .typeText(MainPage.comments, MainPage.textForComments)
        .takeScreenshot()
        .click(MainPage.submitButton)
        .takeScreenshot();
});

test("Simple dropdown handling", async t => {

    await t
        .maximizeWindow()
        .click(MainPage.citySelect)
        .click(MainPage.cityOption.withText("Both"))
        .expect(MainPage.citySelect.value).eql("Both");
});

test('Handling multiple checkboxes with one loop', async t => {
    const checkboxes = Selector('legend').withText('Which features are important to you:').parent(0).find('input');
    const checkboxCount = await checkboxes.count;
    await t
        .maximizeWindow();
    for (let i = 0; i < checkboxCount; i++)
        await t.click(checkboxes.nth(i));
});
