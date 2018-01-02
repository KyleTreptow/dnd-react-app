// Base component for Character sheet with checks
import CSBaseComponent from '../CSBaseComponent'
// View template for the component
import Template from '../views/Features.template'

export default class SkillsComponent extends CSBaseComponent {
    constructor(props) {
        super(props);

        this.classFeaturesObject = this.props.characterObject.get("classFeatures").toJS();
        this.racialFeaturesObject = this.props.characterObject.get("racialFeatures").toJS();
    }

    updateCharacter() {
        // Do work here
        super.updateCharacter();
    }

    render() {
        return Template.bind(this)();
    }
}

