import React from 'react'
import { useFormik} from 'formik'
const Contact = () => {
  const formik = useFormik({ initialValues:{
    firstName: '',
    lastName: '',
    email: '',
  },
  onSubmit:async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  },
})
  return (
    <div>
      <h1>İletişim</h1>
      
      
        <form onSubmit={formik.handleSubmit} className="form">
          <div>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" placeholder="Jane" onChange={formik.handleChange("firstName")} />
        </div>
        <div>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" placeholder="Doe" onChange={formik.handleChange("lastName")} />
        </div>
        <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          onChange={formik.handleChange("email")}
          type="email"
        />
        </div>
        <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          onChange={formik.handleChange("Message")}
          type="text"
        />
        </div>
        <button type="submit">Submit</button>
      </form>

      
  
    </div>
  )
}

export default Contact