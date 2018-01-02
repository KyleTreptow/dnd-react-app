// Base component for Character sheet with checks
import CSBaseComponent from '../CSBaseComponent'
// View template for the component
import Template from '../views/Skills.template'

export default class SkillsComponent extends CSBaseComponent {
    constructor(props) {
        super(props);

        this.skillsObject = this.props.characterObject.get("skills").toJS();
    }

    updateCharacter() {
        // Do work here
        super.updateCharacter();
    }

    render() {
        return Template.bind(this)();
    }
}

