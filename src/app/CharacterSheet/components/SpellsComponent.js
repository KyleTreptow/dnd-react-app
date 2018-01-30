// Base component for Character sheet with checks
import CSBaseComponent from '../CSBaseComponent'
// View template for the component
import Template from '../views/Spells.template'

export default class SkillsComponent extends CSBaseComponent {
    constructor(props) {
        super(props);

        this.spellsObject = this.props.characterObject.get("spells").toJS();
    }

    updateCharacter() {
        // Do work here
        super.updateCharacter();
    }

    render() {
        return Template.bind(this)();
    }
}

