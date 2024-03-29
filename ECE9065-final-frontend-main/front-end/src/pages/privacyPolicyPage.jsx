import React, { useState, useEffect} from 'react';
import { getPolicy } from "../api/user";
function PrivacyPolicyPage(){
    // https://developer.moneris.com/More/Compliance/Sample%20Privacy%20Policy
    const [content,setContent] = useState("");
    
    useEffect(()=>{
        getPolicy("policy")
            .then((res)=>{
                setContent(res.data.content)
                
            })
            .catch((error)=>console.log(error));
    },[]);
    return (
        // <div>
        //     <h2>PRIVACY POLICY</h2>
        //     <p> 
        //         We are committed to maintaining the accuracy, confidentiality, and security of your personally identifiable information ("Personal Information"). 
        //         As part of this commitment, our privacy policy governs our actions as they relate to the collection, use and disclosure of Personal Information. 
        //         Our privacy policy is based upon the values set by the Canadian Standards Association's Model Code for the Protection of Personal Information and Canada's Personal Information Protection and Electronic Documents Act.
        //     </p>
        //     <h4> 1. Introduction</h4>
        //     <p>
        //         We are responsible for maintaining and protecting the Personal Information under our control. 
        //         We have designated an individual or individuals who is/are responsible for compliance with our privacy policy.
        //     </p>
        //     <h4> 2. Identifying Purposes</h4>
        //     <p>
        //         We collect, use and disclose Personal Information to provide you with the product or service you have requested and to offer you additional products and services we believe you might be interested in. 
        //         The purposes for which we collect Personal Information will be identified before or at the time we collect the information. In certain circumstances, 
        //         the purposes for which information is collected may be clear, and consent may be implied.
        //     </p>
        //     <h4>3. Consent</h4>
        //     <p>
        //         Knowledge and consent are required for the collection, use or disclosure of Personal Information except where required or permitted by law. Providing us with your Personal Information is always your choice. 
        //         However, your decision not to provide certain information may limit our ability to provide you with our products or services.
        //         We will not require you to consent to the collection, use, or disclosure of information as a condition to the supply of a product or service, 
        //         except as required to be able to supply the product or service.
        //     </p>
        //     <h4>4. Limiting Collection</h4>
        //     <p>
        //         The Personal Information collected will be limited to those details necessary for the purposes identified by us. 
        //         With your consent, we may collect Personal Information from you in person, over the telephone 
        //         or by corresponding with you via mail, facsimile, or the Internet.
        //     </p>
        //     <h4>5. Limiting Use, Disclosure and Retention</h4>
        //     <p>
        //         Personal Information may only be used or disclosed for the purpose for which it was collected unless you have otherwise consented, 
        //         or when it is required or permitted by law. Personal Information will only be retained for the period of time required to 
        //         fulfill the purpose for which we collected it or as may be required by law. 
        //     </p>
        //     <h4>6. Accuracy</h4>
        //     <p>
        //         Personal Information will be maintained in as accurate, 
        //         complete and up-to-date form as is necessary to fulfill the purposes for which it is to be used.
        //     </p>
        //     <h4> 7. Safeguarding Customer Information</h4>
        //     <p>
        //         Personal Information will be protected by security safeguards that are appropriate to the sensitivity level of the information. 
        //         We take all reasonable precautions to protect your Personal Information from any loss or unauthorized use, access or disclosure.
        //     </p>
        //     <h4>8. Openness</h4>
        //     <p>
        //         We will make information available to you about our policies and practices with respect to the management of your Personal Information.
        //     </p>
        //     <h4>9. Customer Access</h4>
        //     <p>
        //         Upon request, you will be informed of the existence, use and disclosure of your Personal Information, 
        //         and will be given access to it. You may verify the accuracy and completeness of your Personal Information, and may request that it be amended, 
        //         if appropriate. However, in certain circumstances permitted by law, we will not disclose certain information to you. 
        //         For example, we may not disclose information relating to you if other individuals are referenced or if there are legal, 
        //         security or commercial proprietary restrictions.
        //     </p>
        //     <h4>10. Handling Customer Complaints and Suggestions </h4>
        //     <p>
        //     You may direct any questions or enquiries with respect to our privacy policy 
        //     or our practices by contacting: 123456@gmail.com
        //     </p>

        // </div>
         <div><h2>PRIVACY POLICY</h2>{content}</div>
        )
    }
   
   
export default PrivacyPolicyPage;