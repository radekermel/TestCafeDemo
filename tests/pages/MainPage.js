import {Selector} from "testcafe";

class MainPage {
    constructor() {
        this.submitButton = Selector('#submit-button');
        this.inputDevName = Selector('#developer-name');
        this.windowsRadio = Selector('#windows');
        this.trialOfTestcafeCheckbox = Selector('#tried-test-cafe');
        this.remoteTestingCheckbox = Selector('#remote-testing');
        this.reusingJsCodeCheckbox = Selector('#reusing-js-code');
        this.backgroundParalelTestinfCheckbox = Selector('#background-parallel-testing');
        this.contiuesIntegrationEmbeddingCheckbox = Selector('#continuous-integration-embedding');
        this.traficMarkupAnalasysCheckbox = Selector('#traffic-markup-analysis');
        this.slider = Selector('.ui-slider-handle');
        this.citySelect = Selector('#preferred-interface');
        this.comments = Selector('#comments');

        this.cityOption = this.citySelect.find('option');

        this.textForComments = String('orem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus ' +
            'turpis massa tincidunt. Vitae turpis massa sed elementum. Enim praesent elementum facilisis leo ' +
            'vel fringilla. Magna eget est lorem ipsum. Eget mi proin sed libero enim. Leo integer malesuada nunc ' +
            'vel risus commodo viverra maecenas accumsan. Nibh nisl condimentum id venenatis. Quam pellentesque ' +
            'nec nam aliquam sem et tortor. Mauris augue neque gravida in. Pellentesque elit ullamcorper dignissim ' +
            'cras tincidunt lobortis feugiat vivamus at. Vitae aliquet nec ullamcorper sit. Urna porttitor rhoncus ' +
            'dolor purus non. Etiam erat velit scelerisque in dictum. At augue eget arcu dictum.');
        this.sliderStyleAtributeValue = String('left: 11.1111%;');
        this.devName = String('Peter Smith');

        this.dragSliderXDirection = Number(50);
        this.dragSliderYDirection = Number(0);
    }
}

export default new MainPage();