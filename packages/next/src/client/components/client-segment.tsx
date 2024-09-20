'use client'

type ClientSegmentRootProps = {
  Component: React.ComponentType
  props: { [props: string]: any }
}

export function ClientSegmentRoot({
  Component,
  props,
}: ClientSegmentRootProps) {
  if (typeof window === 'undefined') {
    const { createDynamicallyTrackedParams } =
      require('./fallback-params') as typeof import('./fallback-params')

    props.params = props.params
      ? createDynamicallyTrackedParams(props.params)
      : {}
  }
  return <Component {...props} />
}
