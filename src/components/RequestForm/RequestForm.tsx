import { Formik } from "formik";
import { validSchema } from '../../utils/validation';

const RequestForm:React.FC = () => {
    return ( 
    <div>
<Formik 
initialValues={{email:""}}
validationSchema={validSchema}
onSubmit={(values, {setSubmitting, resetForm})=> {
        console.log(values);

        resetForm();
        setSubmitting(false);
      }}
>


</Formik>
    </div> 
);
}
 
export default RequestForm;