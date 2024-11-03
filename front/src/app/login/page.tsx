import { Button, Field, Fieldset, Input, Label, Legend } from "@headlessui/react";
import clsx from "clsx";

export default function Login () {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-lg px-auto">
                <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
                    <Legend className="text-base/7 font-semibold text-white">Sign up</Legend>
                    <Field>
                        <Label className="text-sm/6 font-medium text-white">Username</Label>
                        <Input
                          className={clsx(
                            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                          )}
                        />
                    </Field>
                    <Field>
                        <Label className="text-sm/6 font-medium text-white">Email</Label>
                        <Input
                          className={clsx(
                            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                          )}
                        />
                    </Field>
                    <Field>
                        <Label className="text-sm/6 font-medium text-white">Password</Label>
                        <Input
                          className={clsx(
                            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                          )}
                        />
                    </Field>
                    <Field>
                        <Button className="w-full rounded bg-green-600 py-2 px-4 text-sm text-white data-[hover]:bg-green-500 data-[active]:bg-green-700">
                            Sign up with demo
                        </Button>
                    </Field>
                </Fieldset>
            </div>
        </div>
    )
}