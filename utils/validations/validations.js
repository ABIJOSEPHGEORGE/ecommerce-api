import Joi from 'joi';

const schema = {
    signupSchema: Joi.object({
        first_name: Joi.string().required().messages({
            'any.required':'First Name is required'
        }),
        last_name: Joi.string(),
        email: Joi.string().email().required().messages({
            'any.required':'Email is required',
        }),
        password: Joi.string().min(4).required().messages({
            'any.required':'Password is required',
        })
    }),

    loginSchema: Joi.object({
        email: Joi.string().required().messages({
            'any.required':'Email is required'
        }),
        password: Joi.string().required().messages({
            'any.required':'Password is required'
        })
    }),

    adminLoginSchema: Joi.object({
        email: Joi.string().email().required().messages({
            'any.required':'Email is required'
        }),
        password: Joi.string().required().messages({
            'any.required':'Password is required',
        })
    }),

    productSchema: Joi.object({
        product_title: Joi.string().required().messages({
            'any.required':'Product title is required',
        }),
        product_description: Joi.string().required().messages({
            'any.required':'Product description is required'
        }),
        product_image: Joi.string().required().messages({
            'any.required': 'Product image is required',
        }),
        product_price: Joi.string().required().messages({
            'any.required':'Product price is required',
        })
    })
}

export default schema;