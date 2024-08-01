"use client";

import React from 'react'

export default function ErrorBundary({ error }: {
    error: Error
}) {
  return (
    <div>{error.message}</div>
  )
}
