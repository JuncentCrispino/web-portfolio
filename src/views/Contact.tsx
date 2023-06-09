import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  BsFillCheckCircleFill,
  BsFillXCircleFill,
  BsSendFill,
} from 'react-icons/bs';
import * as yup from 'yup';

import notify from '../components/notify';

export async function executeRecaptcha(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY, {
          action: 'submit',
        })
        .then((token: string) => {
          resolve(token);
        })
        .catch((err: unknown) => {
          reject(err);
        });
    });
  });
}

const validationSchema = yup.object().shape({
  email: yup.string().required('Email is required.'),
  message: yup.string().min(5, 'Please enter a valid concern.'),
});

export default function Contact() {
  const [isLoading, setIsloading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    email: string;
    message: string;
  }>({
    defaultValues: {
      email: '',
      message: '',
    },
    resolver: yupResolver(validationSchema),
  });
  const onsubmit = async (input: {
    message: string;
    email: string;
  }): Promise<void> => {
    try {
      setIsloading(true);
      const captchaToken = await executeRecaptcha();
      setIsloading(true);
      const req = await fetch(
        'https://cdol7zt7mi.execute-api.ap-southeast-1.amazonaws.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            captchaToken,
            ...input,
          }),
        },
      );
      if (req.status !== 200) {
        return notify({
          message: 'Something went wrong',
          icon: <BsFillXCircleFill className="h-8 w-8 text-red-500" />,
          status: 'Error',
        });
      }
      return notify({
        message:
          'Your message has been successfully sent. I will reply back on your provided email as soon as I can. Than you!',
        icon: <BsFillCheckCircleFill className="h-8 w-8 text-green-500" />,
        status: '🥳 Success',
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      return notify({
        message: 'Something went wrong',
        icon: <BsFillXCircleFill className="h-8 w-8 text-red-500" />,
        status: 'Error',
      });
    } finally {
      setIsloading(false);
    }
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit(onsubmit)}>
      <p className="pb-3 text-center text-lg font-bold">Contact Form</p>
      <div className="pb-5">
        <Controller
          name="email"
          control={control}
          render={({ field: { value, onChange } }) => (
            <label className="text-left text-sm font-medium" htmlFor="email">
              Email
              <input
                id="email"
                type="email"
                placeholder="email@example.com"
                className={clsx(
                  'mb-2 block  h-10  w-full rounded p-1 indent-1 text-base outline focus:outline-2',
                  errors.email
                    ? 'outline-2 outline-red-500'
                    : 'outline-1 outline-sky-300 ',
                )}
                onChange={onChange}
                value={value}
              />
            </label>
          )}
        />
      </div>
      <div className="pb-5">
        <Controller
          name="message"
          control={control}
          render={({ field: { value, onChange } }) => (
            <label className="text-left text-sm font-medium" htmlFor="message">
              Message
              <textarea
                id="message"
                placeholder="content"
                className={clsx(
                  'mb-2 block  h-10 min-h-[250px] w-full rounded p-1 indent-1 text-base outline focus:outline-2',
                  errors.message
                    ? 'outline-2 outline-red-500'
                    : 'outline-1 outline-sky-300 ',
                )}
                onChange={onChange}
                value={value}
              />
            </label>
          )}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="flex items-center gap-2 rounded-md bg-white px-4 py-2 font-semibold text-gray-900/70 shadow-md"
          type="submit"
        >
          {isLoading ? (
            <div className="flex">
              <svg
                className="mr-2 h-5 w-5 animate-spin fill-gray-900/75 text-gray-200 "
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            <BsSendFill />
          )}
          {isLoading ? 'Processing...' : 'Send'}
        </button>
      </div>
    </form>
  );
}
