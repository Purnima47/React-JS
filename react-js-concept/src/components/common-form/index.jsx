import CommonInput from '../common-input';

const formTypes = {
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREA: 'textarea',
};


const CommonForm = ({ formControls = [], onHandleSubmit, formData, setFormData, buttonText }) => {
    function renderFormElement(getcurrElement) {
        let content = null;

        switch (getcurrElement?.componentType) {
            case formTypes.INPUT:
                content = (
                    <CommonInput
                        label={getcurrElement.label}
                        name={getcurrElement.name}
                        id={getcurrElement.id}
                        type={getcurrElement.type}
                        placeholder={getcurrElement.placeholder}
                        value={formData[getcurrElement.name]}
                        onChange={(event) => 
                        setFormData({
                            ...formData,
                            [event.target.name]: event.target.value,
                        })
                        }
                    />
                );

                break;

            default:
                content = (
                    <CommonInput
                        label={getcurrElement.label}
                        name={getcurrElement.name}
                        id={getcurrElement.id}
                        placeholder={getcurrElement.placeholder}
                        value={formData[getcurrElement.name]}
                        type={getcurrElement.type}
                        onChange={(event) => setFormData({
                            ...formData,
                            [event.target.name]: event.target.value,
                        })}
                    />
                );
                break;
        }

        return content;
    }


    return (
        <form onSubmit={onHandleSubmit}>
            {formControls?.length
                ? formControls.map((singleFormElementItem) =>
                    renderFormElement(singleFormElementItem)
                )
                : null}

            <div style={{ marginTop: '12px' }}>
                <button type='submit'>{buttonText || 'Submit'}</button>
            </div>
        </form>
    );
}

export default CommonForm;
