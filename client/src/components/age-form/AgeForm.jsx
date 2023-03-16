import React from 'react';

import { Input, Button } from '@mui/material';

export const AgeForm = () => {
  return (
    <Form>
        <Input type='text' name='age' />
        <Button>Submit</Button>
    </Form>
  )
}