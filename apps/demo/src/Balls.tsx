import { GroupProps } from "@react-three/fiber"
import { ECS } from "./state"

export const Balls = () => {
  return (
    <ECS.Archetype properties="isBall">{(entity) => entity.jsx}</ECS.Archetype>
  )
}

export const spawnBall = (props: GroupProps) =>
  ECS.world.add({
    isBall: true,
    jsx: (
      <ECS.Property name="transform">
        <group {...props}>
          <mesh>
            <sphereGeometry args={[0.5]} />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </group>
      </ECS.Property>
    )
  })
