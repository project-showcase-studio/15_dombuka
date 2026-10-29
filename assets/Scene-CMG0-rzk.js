var Jt=Object.defineProperty;var es=(s,e,t)=>e in s?Jt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Pt=(s,e,t)=>es(s,typeof e!="symbol"?e+"":e,t);import{D as ts,H as Z,F as pt,a as Be,L as ss,b as Fe,M as is,O as as,B as St,d as ze,S as W,U as J,V as O,W as fe,N as $,C as os,e as U,f as Ae,h as qe,R as ve,i as ns,A as Oe,Z as Ve,k as yt,l as Et,m as rs,n as le,o as ls,p as cs,q as hs,s as _t,t as wt,u as us,v as ds,w as fs,x as ps,y as ms,z as gs,E as vs,G as jt,I as xs,J as Ms,K as Lt,P as bt,T as Ss,Q as ws,X as bs,Y as Ts,$ as Ps,r as A,j as d,a0 as ys,a1 as Es,a2 as _s,a3 as Cs,a4 as Ds,a5 as H,a6 as Rs,a7 as Re,a8 as zs,a9 as As,aa as Bt,ab as Ns,ac as Us,ad as Ot,ae as Ct,af as ke,ag as me,ah as vt,ai as Vt,aj as Fs,ak as Is,al as ee,am as Ge,an as js}from"./three-Bi0UVqhr.js";import{W as Dt,T as Rt,b as Ls,H as kt,F as zt,C as Gt,m as Bs,r as Ht,n as mt}from"./index-Cm6EFPXJ.js";class Os extends ts{constructor(e){super(e),this.type=Z}parse(e){const n=function(v,M){switch(v){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(M||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(M||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(M||""))}},c=`
`,u=function(v,M,b){M=M||1024;let P=v.pos,C=-1,E=0,N="",z=String.fromCharCode.apply(null,new Uint16Array(v.subarray(P,P+128)));for(;0>(C=z.indexOf(c))&&E<M&&P<v.byteLength;)N+=z,E+=z.length,P+=128,z+=String.fromCharCode.apply(null,new Uint16Array(v.subarray(P,P+128)));return-1<C?(v.pos+=E+C+1,N+z.slice(0,C)):!1},f=function(v){const M=/^#\?(\S+)/,b=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,S=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*FORMAT=(\S+)\s*$/,C=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,E={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let N,z;for((v.pos>=v.byteLength||!(N=u(v)))&&n(1,"no header found"),(z=N.match(M))||n(3,"bad initial token"),E.valid|=1,E.programtype=z[1],E.string+=N+`
`;N=u(v),N!==!1;){if(E.string+=N+`
`,N.charAt(0)==="#"){E.comments+=N+`
`;continue}if((z=N.match(b))&&(E.gamma=parseFloat(z[1])),(z=N.match(S))&&(E.exposure=parseFloat(z[1])),(z=N.match(P))&&(E.valid|=2,E.format=z[1]),(z=N.match(C))&&(E.valid|=4,E.height=parseInt(z[1],10),E.width=parseInt(z[2],10)),E.valid&2&&E.valid&4)break}return E.valid&2||n(3,"missing format specifier"),E.valid&4||n(3,"missing image size specifier"),E},p=function(v,M,b){const S=M;if(S<8||S>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);S!==(v[2]<<8|v[3])&&n(3,"wrong scanline width");const P=new Uint8Array(4*M*b);P.length||n(4,"unable to allocate buffer space");let C=0,E=0;const N=4*S,z=new Uint8Array(4),k=new Uint8Array(N);let se=b;for(;se>0&&E<v.byteLength;){E+4>v.byteLength&&n(1),z[0]=v[E++],z[1]=v[E++],z[2]=v[E++],z[3]=v[E++],(z[0]!=2||z[1]!=2||(z[2]<<8|z[3])!=S)&&n(3,"bad rgbe scanline format");let j=0,L;for(;j<N&&E<v.byteLength;){L=v[E++];const B=L>128;if(B&&(L-=128),(L===0||j+L>N)&&n(3,"bad scanline data"),B){const V=v[E++];for(let he=0;he<L;he++)k[j++]=V}else k.set(v.subarray(E,E+L),j),j+=L,E+=L}const q=S;for(let B=0;B<q;B++){let V=0;P[C]=k[B+V],V+=S,P[C+1]=k[B+V],V+=S,P[C+2]=k[B+V],V+=S,P[C+3]=k[B+V],C+=4}se--}return P},g=function(v,M,b,S){const P=v[M+3],C=Math.pow(2,P-128)/255;b[S+0]=v[M+0]*C,b[S+1]=v[M+1]*C,b[S+2]=v[M+2]*C,b[S+3]=1},T=function(v,M,b,S){const P=v[M+3],C=Math.pow(2,P-128)/255;b[S+0]=Be.toHalfFloat(Math.min(v[M+0]*C,65504)),b[S+1]=Be.toHalfFloat(Math.min(v[M+1]*C,65504)),b[S+2]=Be.toHalfFloat(Math.min(v[M+2]*C,65504)),b[S+3]=Be.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const y=f(m),D=y.width,F=y.height,R=p(m.subarray(m.pos),D,F);let x,w,_;switch(this.type){case pt:_=R.length/4;const v=new Float32Array(_*4);for(let b=0;b<_;b++)g(R,b*4,v,b*4);x=v,w=pt;break;case Z:_=R.length/4;const M=new Uint16Array(_*4);for(let b=0;b<_;b++)T(R,b*4,M,b*4);x=M,w=Z;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:D,height:F,data:x,header:y.string,gamma:y.gamma,exposure:y.exposure,type:w}}setDataType(e){return this.type=e,this}load(e,t,i,r){function a(n,l){switch(n.type){case pt:case Z:n.colorSpace=ss,n.minFilter=Fe,n.magFilter=Fe,n.generateMipmaps=!1,n.flipY=!0;break}t&&t(n,l)}return super.load(e,a,i,r)}}const Ne={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class pe{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Vs=new as(-1,1,1,-1,0,1);class ks extends St{constructor(){super(),this.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ze([0,2,0,0,2,0],2))}}const Gs=new ks;class $e{constructor(e){this._mesh=new is(Gs,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Vs)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Hs extends pe{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof W?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=J.clone(e.uniforms),this.material=new W({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new $e(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class At extends pe{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let n,l;this.inverse?(n=0,l=1):(n=1,l=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,n,4294967295),a.buffers.stencil.setClear(l),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class Ws extends pe{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Xs{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new O);this._width=i.width,this._height=i.height,t=new fe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Z}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hs(Ne),this.copyPass.material.blending=$,this.clock=new os}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const n=this.passes[r];if(n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),n.needsSwap){if(i){const l=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}At!==void 0&&(n instanceof At?i=!0:n instanceof Ws&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new O);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const He={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new O},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ae},cameraProjectionMatrixInverse:{value:new Ae},cameraWorldMatrix:{value:new Ae},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},We={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},gt={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Zs(s=5){const e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=Ys(e),i=t.length,r=new Uint8Array(i*4);for(let n=0;n<i;++n){const l=t[n],o=2*Math.PI*l/i,h=new U(Math.cos(o),Math.sin(o),0).normalize();r[n*4]=(h.x*.5+.5)*255,r[n*4+1]=(h.y*.5+.5)*255,r[n*4+2]=127,r[n*4+3]=255}const a=new qe(r,e,e);return a.wrapS=ve,a.wrapT=ve,a.needsUpdate=!0,a}function Ys(s){const e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,i=Array(t).fill(0);let r=Math.floor(e/2),a=e-1;for(let n=1;n<=t;){if(r===-1&&a===e?(a=e-2,r=0):(a===e&&(a=0),r<0&&(r=e-1)),i[r*e+a]!==0){a-=2,r++;continue}else i[r*e+a]=n++;a++,r--}return i}const Xe={defines:{SAMPLES:16,SAMPLE_VECTORS:Wt(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new O},cameraProjectionMatrixInverse:{value:new Ae},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Wt(s,e,t){const i=Qs(s,e,t);let r="vec3[SAMPLES](";for(let a=0;a<s;a++){const n=i[a];r+=`vec3(${n.x}, ${n.y}, ${n.z})${a<s-1?",":")"}`}return r}function Qs(s,e,t){const i=[];for(let r=0;r<s;r++){const a=2*Math.PI*e*r/s,n=Math.pow(r/(s-1),t);i.push(new U(Math.cos(a),Math.sin(a),n))}return i}class qs{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,r){return e[0]*t+e[1]*i+e[2]*r}dot4(e,t,i,r,a){return e[0]*t+e[1]*i+e[2]*r+e[3]*a}noise(e,t){let i,r,a;const n=.5*(Math.sqrt(3)-1),l=(e+t)*n,o=Math.floor(e+l),h=Math.floor(t+l),c=(3-Math.sqrt(3))/6,u=(o+h)*c,f=o-u,p=h-u,g=e-f,T=t-p;let m,y;g>T?(m=1,y=0):(m=0,y=1);const D=g-m+c,F=T-y+c,R=g-1+2*c,x=T-1+2*c,w=o&255,_=h&255,v=this.perm[w+this.perm[_]]%12,M=this.perm[w+m+this.perm[_+y]]%12,b=this.perm[w+1+this.perm[_+1]]%12;let S=.5-g*g-T*T;S<0?i=0:(S*=S,i=S*S*this.dot(this.grad3[v],g,T));let P=.5-D*D-F*F;P<0?r=0:(P*=P,r=P*P*this.dot(this.grad3[M],D,F));let C=.5-R*R-x*x;return C<0?a=0:(C*=C,a=C*C*this.dot(this.grad3[b],R,x)),70*(i+r+a)}noise3d(e,t,i){let r,a,n,l;const h=(e+t+i)*.3333333333333333,c=Math.floor(e+h),u=Math.floor(t+h),f=Math.floor(i+h),p=1/6,g=(c+u+f)*p,T=c-g,m=u-g,y=f-g,D=e-T,F=t-m,R=i-y;let x,w,_,v,M,b;D>=F?F>=R?(x=1,w=0,_=0,v=1,M=1,b=0):D>=R?(x=1,w=0,_=0,v=1,M=0,b=1):(x=0,w=0,_=1,v=1,M=0,b=1):F<R?(x=0,w=0,_=1,v=0,M=1,b=1):D<R?(x=0,w=1,_=0,v=0,M=1,b=1):(x=0,w=1,_=0,v=1,M=1,b=0);const S=D-x+p,P=F-w+p,C=R-_+p,E=D-v+2*p,N=F-M+2*p,z=R-b+2*p,k=D-1+3*p,se=F-1+3*p,j=R-1+3*p,L=c&255,q=u&255,B=f&255,V=this.perm[L+this.perm[q+this.perm[B]]]%12,he=this.perm[L+x+this.perm[q+w+this.perm[B+_]]]%12,je=this.perm[L+v+this.perm[q+M+this.perm[B+b]]]%12,Le=this.perm[L+1+this.perm[q+1+this.perm[B+1]]]%12;let ie=.6-D*D-F*F-R*R;ie<0?r=0:(ie*=ie,r=ie*ie*this.dot3(this.grad3[V],D,F,R));let ae=.6-S*S-P*P-C*C;ae<0?a=0:(ae*=ae,a=ae*ae*this.dot3(this.grad3[he],S,P,C));let oe=.6-E*E-N*N-z*z;oe<0?n=0:(oe*=oe,n=oe*oe*this.dot3(this.grad3[je],E,N,z));let ne=.6-k*k-se*se-j*j;return ne<0?l=0:(ne*=ne,l=ne*ne*this.dot3(this.grad3[Le],k,se,j)),32*(r+a+n+l)}noise4d(e,t,i,r){const a=this.grad4,n=this.simplex,l=this.perm,o=(Math.sqrt(5)-1)/4,h=(5-Math.sqrt(5))/20;let c,u,f,p,g;const T=(e+t+i+r)*o,m=Math.floor(e+T),y=Math.floor(t+T),D=Math.floor(i+T),F=Math.floor(r+T),R=(m+y+D+F)*h,x=m-R,w=y-R,_=D-R,v=F-R,M=e-x,b=t-w,S=i-_,P=r-v,C=M>b?32:0,E=M>S?16:0,N=b>S?8:0,z=M>P?4:0,k=b>P?2:0,se=S>P?1:0,j=C+E+N+z+k+se,L=n[j][0]>=3?1:0,q=n[j][1]>=3?1:0,B=n[j][2]>=3?1:0,V=n[j][3]>=3?1:0,he=n[j][0]>=2?1:0,je=n[j][1]>=2?1:0,Le=n[j][2]>=2?1:0,ie=n[j][3]>=2?1:0,ae=n[j][0]>=1?1:0,oe=n[j][1]>=1?1:0,ne=n[j][2]>=1?1:0,Tt=n[j][3]>=1?1:0,Ke=M-L+h,Je=b-q+h,et=S-B+h,tt=P-V+h,st=M-he+2*h,it=b-je+2*h,at=S-Le+2*h,ot=P-ie+2*h,nt=M-ae+3*h,rt=b-oe+3*h,lt=S-ne+3*h,ct=P-Tt+3*h,ht=M-1+4*h,ut=b-1+4*h,dt=S-1+4*h,ft=P-1+4*h,we=m&255,be=y&255,Te=D&255,Pe=F&255,Yt=l[we+l[be+l[Te+l[Pe]]]]%32,Qt=l[we+L+l[be+q+l[Te+B+l[Pe+V]]]]%32,qt=l[we+he+l[be+je+l[Te+Le+l[Pe+ie]]]]%32,$t=l[we+ae+l[be+oe+l[Te+ne+l[Pe+Tt]]]]%32,Kt=l[we+1+l[be+1+l[Te+1+l[Pe+1]]]]%32;let ye=.6-M*M-b*b-S*S-P*P;ye<0?c=0:(ye*=ye,c=ye*ye*this.dot4(a[Yt],M,b,S,P));let Ee=.6-Ke*Ke-Je*Je-et*et-tt*tt;Ee<0?u=0:(Ee*=Ee,u=Ee*Ee*this.dot4(a[Qt],Ke,Je,et,tt));let _e=.6-st*st-it*it-at*at-ot*ot;_e<0?f=0:(_e*=_e,f=_e*_e*this.dot4(a[qt],st,it,at,ot));let Ce=.6-nt*nt-rt*rt-lt*lt-ct*ct;Ce<0?p=0:(Ce*=Ce,p=Ce*Ce*this.dot4(a[$t],nt,rt,lt,ct));let De=.6-ht*ht-ut*ut-dt*dt-ft*ft;return De<0?g=0:(De*=De,g=De*De*this.dot4(a[Kt],ht,ut,dt,ft)),27*(c+u+f+p+g)}}class Y extends pe{constructor(e,t,i,r,a,n,l){super(),this.width=i!==void 0?i:512,this.height=r!==void 0?r:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Zs(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new fe(this.width,this.height,{type:Z}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new W({defines:Object.assign({},He.defines),uniforms:J.clone(He.uniforms),vertexShader:He.vertexShader,fragmentShader:He.fragmentShader,blending:$,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ns,this.normalMaterial.blending=$,this.pdMaterial=new W({defines:Object.assign({},Xe.defines),uniforms:J.clone(Xe.uniforms),vertexShader:Xe.vertexShader,fragmentShader:Xe.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new W({defines:Object.assign({},We.defines),uniforms:J.clone(We.uniforms),vertexShader:We.vertexShader,fragmentShader:We.fragmentShader,blending:$}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new W({uniforms:J.clone(Ne.uniforms),vertexShader:Ne.vertexShader,fragmentShader:Ne.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Et,blendDst:Ve,blendEquation:Oe,blendSrcAlpha:yt,blendDstAlpha:Ve,blendEquationAlpha:Oe}),this.blendMaterial=new W({uniforms:J.clone(gt.uniforms),vertexShader:gt.vertexShader,fragmentShader:gt.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:rs,blendSrc:Et,blendDst:Ve,blendEquation:Oe,blendSrcAlpha:yt,blendDstAlpha:Ve,blendEquationAlpha:Oe}),this.fsQuad=new $e(null),this.originalClearColor=new le,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),n!==void 0&&this.updateGtaoMaterial(n),l!==void 0&&this.updatePdMaterial(l)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new ls,this.depthTexture.format=cs,this.depthTexture.type=hs,this.normalRenderTarget=new fe(this.width,this.height,{minFilter:_t,magFilter:_t,type:Z,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const i=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Wt(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Y.OUTPUT.Off:break;case Y.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=$,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Y.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=$,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Y.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=$,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Y.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Y.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=$,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Y.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=$,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,r,a){e.getClearColor(this.originalClearColor);const n=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(a||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=l,e.setClearColor(this.originalClearColor),e.setClearAlpha(n)}renderOverride(e,t,i,r,a){e.getClearColor(this.originalClearColor);const n=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=t.clearColor||r,a=t.clearAlpha||a,r!=null&&(e.setClearColor(r),e.setClearAlpha(a||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=l,e.setClearColor(this.originalClearColor),e.setClearAlpha(n)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){const r=t.get(i);i.visible=r}),t.clear()}generateNoise(e=64){const t=new qs,i=e*e*4,r=new Uint8Array(i);for(let n=0;n<e;n++)for(let l=0;l<e;l++){const o=n,h=l;r[(n*e+l)*4]=(t.noise(o,h)*.5+.5)*255,r[(n*e+l)*4+1]=(t.noise(o+e,h)*.5+.5)*255,r[(n*e+l)*4+2]=(t.noise(o,h+e)*.5+.5)*255,r[(n*e+l)*4+3]=(t.noise(o+e,h+e)*.5+.5)*255}const a=new qe(r,e,e,wt,us);return a.wrapS=ve,a.wrapT=ve,a.needsUpdate=!0,a}}Y.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const $s={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Ks extends pe{constructor(){super();const e=$s;this.uniforms=J.clone(e.uniforms),this.material=new ds({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new $e(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},fs.getTransfer(this._outputColorSpace)===ps&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ms?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gs?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vs?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===jt?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xs?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ms&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Js extends pe{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new le}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let a,n;this.overrideMaterial!==null&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=n),e.autoClear=r}}const ei={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new le(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class xe extends pe{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new O(e.x,e.y):new O(256,256),this.clearColor=new le(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);this.renderTargetBright=new fe(a,n,{type:Z}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new fe(a,n,{type:Z});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new fe(a,n,{type:Z});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),a=Math.round(a/2),n=Math.round(n/2)}const l=ei;this.highPassUniforms=J.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new W({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const o=[3,5,7,9,11];a=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(o[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new O(1/a,1/n),a=Math.round(a/2),n=Math.round(n/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=Ne;this.copyUniforms=J.clone(c.uniforms),this.blendMaterial=new W({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Lt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new le,this.oldClearAlpha=1,this.basic=new bt,this.fsQuad=new $e(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,r),this.renderTargetsVertical[a].setSize(i,r),this.separableBlurMaterials[a].uniforms.invSize.value=new O(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const n=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this.fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[o].uniforms.direction.value=xe.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[o]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=xe.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[o]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[o];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=n}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new W({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new O(.5,.5)},direction:{value:new O(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new W({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}xe.BlurDirectionX=new O(1,0);xe.BlurDirectionY=new O(0,1);const ti=""+new URL("interior-iasx9VwX.hdr",import.meta.url).href,Ye=new Map;function re(s,e){const t=Ye.get(s);if(t)return t;const i=e();return Ye.set(s,i),i}function G(s,e,t){let i=s*374761393+e*668265263+t*2147483647|0;return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967295}function de(s,e,t,i,r){const a=Math.floor(s),n=Math.floor(e),l=s-a,o=e-n,h=l*l*(3-2*l),c=o*o*(3-2*o),u=(a%t+t)%t,f=(n%i+i)%i,p=(u+1)%t,g=(f+1)%i,T=G(u,f,r),m=G(p,f,r),y=G(u,g,r),D=G(p,g,r);return T+(m-T)*h+(y-T)*c+(T-m-y+D)*h*c}function ce(s,e,t,i,r,a){let n=0,l=.5,o=0;for(let h=0;h<r;h++){const c=t<<h,u=i<<h;n+=l*de(s*c,e*u,c,u,a+h*17),o+=l,l*=.5}return n/o}const te=s=>Math.min(1,Math.max(0,s)),X=(s,e,t)=>{const i=te((t-s)/(e-s));return i*i*(3-2*i)};function Ue(s){const e=parseInt(s.replace("#",""),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function ge(s,e,t,i,r){const a=new qe(s,e,t,wt);return a.wrapS=ve,a.wrapT=ve,a.magFilter=Fe,a.minFilter=bs,a.generateMipmaps=!0,a.anisotropy=8,a.colorSpace=i?Ts:Ps,a.repeat.set(r[0],r[1]),a.needsUpdate=!0,a}function Xt(s,e,t,i){const r=new Uint8Array(e*t*4);for(let a=0;a<t;a++)for(let n=0;n<e;n++){const l=s[a*e+(n-1+e)%e],o=s[a*e+(n+1)%e],h=s[(a-1+t)%t*e+n],c=s[(a+1)%t*e+n];let u=(l-o)*i,f=(h-c)*i,p=1;const g=Math.hypot(u,f,p);u/=g,f/=g,p/=g;const T=(a*e+n)*4;r[T]=(u*.5+.5)*255,r[T+1]=(f*.5+.5)*255,r[T+2]=(p*.5+.5)*255,r[T+3]=255}return r}function Ie(s,e,t,i,r){const a=new Uint8Array(s*e*4),n=new Uint8Array(s*e*4),l=new Float32Array(s*e),o=new Float32Array(5);for(let c=0;c<e;c++)for(let u=0;u<s;u++){r(u/s,c/e,o);const f=(c*s+u)*4;a[f]=te(o[0])*255,a[f+1]=te(o[1])*255,a[f+2]=te(o[2])*255,a[f+3]=255;const p=te(o[3])*255;n[f]=p,n[f+1]=p,n[f+2]=p,n[f+3]=255,l[c*s+u]=o[4]}const h=Xt(l,s,e,i);return{map:ge(a,s,e,!0,t),roughnessMap:ge(n,s,e,!1,t),normalMap:ge(h,s,e,!1,t)}}function si(){return Ie(1024,1024,[1/1.6,1/1.6],4,(e,t,i)=>{const r=ce(e,t,3,3,4,11),a=ce(e,t,48,48,3,23),n=300,l=Math.floor(e*n),o=Math.floor(t*n),h=G(l,o,5);let c=0;if(h<.035){const p=G(l,o,6),g=G(l,o,7),T=e*n-l-p*.6-.2,m=t*n-o-g*.6-.2;c=X(.3*(.5+h*12),0,Math.hypot(T,m))*.7}const u=.02*X(.985,1,Math.abs(Math.sin(t*Math.PI*8))),f=.6+(r-.5)*.09+(a-.5)*.04-c*.16-u;i[0]=f*1.02,i[1]=f,i[2]=f*.96,i[3]=.82+(a-.5)*.2+c*.15,i[4]=a*.25+r*.15-c*.8-u*3})}function ii(){return Ie(512,512,[.5,.5],3,(e,t,i)=>{const r=ce(e,t,4,4,5,31),a=.86+(r-.5)*.05;i[0]=a,i[1]=a*.975,i[2]=a*.93,i[3]=.88,i[4]=r})}const ai={oak:{rings:150,contrast:.62,pores:1,rays:1},beech:{rings:120,contrast:.22,pores:.25,rays:0},ash:{rings:110,contrast:.75,pores:.9,rays:0},larch:{rings:95,contrast:.95,pores:.15,rays:0}};function Zt(s,e,t,i,r){const a=ai[t],n=(ce(s,e,1,2,4,i)-.5)*a.rings*.16,l=(ce(s,e,3,4,3,i+5)-.5)*1.1,o=((e*a.rings+n+l)%1+1)%1,h=X(.5,.82,o)*(1-X(.9,1,o)),c=de(s*14,e*620,14,620,i+8),u=de(s*40,e*1100,40,1100,i+11),f=1-X(.05,.4,o),p=X(.6,.82,de(s*110,e*950,110,950,i+3))*f*a.pores,g=a.rays?X(.86,.97,de(s*46,e*300,46,300,i+9))*a.rays:0;r.w=te(.2+h*a.contrast*.75+(c-.5)*.16+(u-.5)*.08+p*.3-g*.14),r.pore=p,r.fleck=g,r.tint=ce(s,e,2,1,3,i+21)}const Q=2048,K=1024;function oi(s){const e=Q*K,t=new Uint8Array(e),i=new Uint8Array(e),r=new Float32Array(e),a=new Uint8Array(e*4),n={w:0,pore:0,fleck:0,tint:0};for(let o=0;o<K;o++)for(let h=0;h<Q;h++){const c=o*Q+h;Zt(h/Q,o/K,s,3,n),t[c]=n.w*255,i[c]=n.tint*255,r[c]=-n.pore*1.2-n.w*.15+n.fleck*.1;const u=te(.3+n.pore*.3+n.w*.05)*255;a[c*4]=u,a[c*4+1]=u,a[c*4+2]=u,a[c*4+3]=255}const l=[1/1.6,1/.8];return{w:t,tint:i,roughnessMap:ge(a,Q,K,!1,l),normalMap:ge(Xt(r,Q,K,1.6),Q,K,!1,l)}}function ni(s,e){var h,c;const t=re(`woodBase:${s}`,()=>oi(s)),i=(h=Dt.find(u=>u.id===s))!=null?h:Dt[0],r=(c=Rt.find(u=>u.id===e))!=null?c:Rt[0],a=Ue(i.light),n=Ue(i.dark),l=Ue(r.color),o=new Uint8Array(Q*K*4);for(let u=0;u<Q*K;u++){const f=t.w[u]/255,p=.93+(t.tint[u]/255-.5)*.22;for(let g=0;g<3;g++){const T=(a[g]+(n[g]-a[g])*f)*p,m=l[g]*(.6+.75*(1-f))*p;o[u*4+g]=te(T*(1-r.amount)+m*r.amount)*255}o[u*4+3]=255}return{map:ge(o,Q,K,!0,[1/1.6,1/.8]),roughnessMap:t.roughnessMap,normalMap:t.normalMap}}function ri(){const s=Ue("#d2ab7c"),e=Ue("#8f633b"),t=12,i={w:0,pore:0,fleck:0,tint:0};return Ie(1024,1024,[1/2.4,1/2.16],3,(r,a,n)=>{const l=Math.floor(a*t),o=G(l,0,41)*.5,h=(r+o)%1,c=Math.floor(h*2),u=l*3+c,f=h*2%1,p=a*t%1;Zt(f*.75+G(u,1,3)*.25,p*.225+G(u,5,3)*.75,"oak",7,i);const g=.88+G(u,2,9)*.2,T=Math.min(f*512,(1-f)*512,p*85,(1-p)*85),m=X(0,1.5,T);for(let y=0;y<3;y++)n[y]=(s[y]+(e[y]-s[y])*i.w)*g*(.45+.55*m);n[3]=.36+i.pore*.25+(1-m)*.4,n[4]=-i.pore*.6-(1-m)*2})}function li(){return Ie(1024,1024,[1/2.4,1/2.4],4,(s,e,t)=>{const i=s*2%1,r=e*4%1,a=Math.floor(s*2)*7+Math.floor(e*4),n=ce(s,e,4,4,5,51),l=ce(s,e,32,32,3,61),o=X(.48,.5,n)*X(.52,.5,n),h=.86+(n-.5)*.06+(l-.5)*.025-o*.035+(G(a,3,3)-.5)*.02,c=Math.min(i*512,(1-i)*512,r*256,(1-r)*256),u=X(.4,1.4,c);t[0]=h*.995*u+.6*(1-u),t[1]=h*.975*u+.58*(1-u),t[2]=h*.94*u+.55*(1-u),t[3]=.14+(l-.5)*.06+(1-u)*.7,t[4]=-(1-u)*1.2+l*.04})}function ci(){return Ie(512,512,[1/.6,1/.15],1.2,(s,e,t)=>{const i=de(s*6,e*512,6,512,71)*.6+de(s*24,e*256,24,256,73)*.4;t[0]=1,t[1]=1,t[2]=1,t[3]=.55+(i-.5)*.5,t[4]=i})}function hi(){const e=new Uint8Array(65536);for(let i=0;i<128;i++)for(let r=0;r<128;r++){const a=(r/128-.5)*2,n=i/128*1,l=te(1-Math.hypot(a*.9,n))**2.2,o=(i*128+r)*4;e[o]=l*255,e[o+1]=l*255,e[o+2]=l*255,e[o+3]=255}const t=new qe(e,128,128,wt);return t.magFilter=Fe,t.minFilter=Fe,t.needsUpdate=!0,t}const ue={concrete:()=>re("concrete",si),plaster:()=>re("plaster",ii),parquet:()=>re("parquet",ri),tiles:()=>re("tiles",li),brushed:()=>re("brushed",ci),lightPool:()=>re("lightPool",hi),wood:(s,e)=>re(`wood:${s}:${e}`,()=>ni(s,e))};function ui(){for(const s of Ye.values())s instanceof Ss?s.dispose():("map"in s&&s.map.dispose(),s.roughnessMap.dispose(),s.normalMap.dispose());Ye.clear()}function Me(s,e=null,t=[0,0]){var l;const i=s.getAttribute("position");s.getAttribute("normal")||s.computeVertexNormals();const r=s.getAttribute("normal"),a=new Float32Array(i.count*2),n=["x","y","z"];for(let o=0;o<i.count;o++){const h=[i.getX(o),i.getY(o),i.getZ(o)],c=[Math.abs(r.getX(o)),Math.abs(r.getY(o)),Math.abs(r.getZ(o))],u=c[0]>=c[1]&&c[0]>=c[2]?0:c[1]>=c[2]?1:2,f=[0,1,2].filter(m=>m!==u),p=e?n.indexOf(e):-1,[g,T]=f.includes(p)?[p,(l=f.find(m=>m!==p))!=null?l:f[1]]:f;a[o*2]=h[g]+t[0],a[o*2+1]=h[T]+t[1]}return s.setAttribute("uv",new ws(a,2)),s}function I(s,e){const t=A.useMemo(s,e);return A.useEffect(()=>()=>{Array.isArray(t)?t.forEach(i=>i.dispose()):t.dispose()},[t]),t}const Qe=s=>Math.atan2(-s.z,s.x),Se=s=>Math.atan2(s.x,s.z);function xt(s,e,t,i){const r=new ee(s,e,t);r.translate(s/2,e/2,0);const a=r.getAttribute("position");for(let n=0;n<a.count;n++)a.setY(n,a.getY(n)+i*a.getX(n));return r.computeVertexNormals(),r}function di(s){const{rise:e,going:t,steps:i,width:r}=s,a=.19/Math.cos(Math.atan2(e,t)),n=new Vt;n.moveTo(0,0);for(let o=0;o<i;o++)n.lineTo(o*t,(o+1)*e),o<i-1&&n.lineTo((o+1)*t,(o+1)*e);n.lineTo((i-1)*t,(i-1)*e-a),s.y0>0?n.lineTo(0,-a):n.lineTo(a*t/e,0),n.closePath();const l=new js(n,{depth:r,bevelEnabled:!1,steps:1});return Me(l)}function fi(s){const e=new Ae;return e.makeBasis(new U(s.dir.x,0,s.dir.z),new U(0,1,0),new U(-s.dir.z,0,s.dir.x)),e.setPosition(s.origin.x+s.dir.z*s.width/2,s.y0,s.origin.z-s.dir.x*s.width/2),e}function Ze(s,e=0,t=s.thickness){const i=new ee(s.maxX-s.minX,t,s.maxZ-s.minZ);Me(i,"x",[s.minX,s.minZ]);const r=[(s.minX+s.maxX)/2,s.top-t/2+e,(s.minZ+s.maxZ)/2];return{geo:i,pos:r}}function Mt(s,e,t,i=0,r=6){const a=[],n=[],l=s/2-t,o=e/2-t,h=[[l,o,0],[-l,o,Math.PI/2],[-l,-o,Math.PI],[l,-o,Math.PI*1.5]];for(const[c,u,f]of h)for(let p=0;p<=r;p++){const g=f+p/r*(Math.PI/2);a.push([c+Math.cos(g)*t,u+Math.sin(g)*t+i]),n.push([Math.cos(g),Math.sin(g)])}return{pts:a,normals:n}}function Nt(s,e=40){const t=[],i=[];for(let r=0;r<e;r++){const a=r/e*Math.PI*2;t.push([Math.cos(a)*s,Math.sin(a)*s]),i.push([Math.cos(a),Math.sin(a)])}return{pts:t,normals:i}}function Ut(s,e){const t=s.map(x=>new U(...x)),i=t.length-1,r=new U(0,1,0),a=Array.from({length:i},(x,w)=>t[w+1].clone().sub(t[w]).normalize()),n=a.map(x=>{const w=new U().crossVectors(x,r);return w.lengthSq()>1e-8?w.normalize():null}),l=n.map((x,w)=>{var _,v;return x!=null?x:((v=(_=n.slice(w+1).find(M=>M))!=null?_:n.slice(0,w).reverse().find(M=>M))!=null?v:new U(1,0,0)).clone()}),o=a.map((x,w)=>new U().crossVectors(l[w],x).normalize()),h=t.map((x,w)=>{if(w===0)return a[0].clone();if(w===i)return a[i-1].clone();const _=a[w-1].clone().add(a[w]);return _.lengthSq()>1e-8?_.normalize():a[w].clone()}),c=e.pts.length,u=(x,w,_)=>{const[v,M]=e.pts[_],b=t[x].clone().addScaledVector(l[w],v).addScaledVector(o[w],M),S=t[x].clone().sub(b).dot(h[x])/a[w].dot(h[x]);return b.addScaledVector(a[w],S)},f=t.map((x,w)=>Array.from({length:c},(_,v)=>w===0?u(0,0,v):w===i?u(w,i-1,v):u(w,w-1,v).add(u(w,w,v)).multiplyScalar(.5))),p=[0];for(let x=1;x<=c;x++){const w=e.pts[x-1],_=e.pts[x%c];p.push(p[x-1]+Math.hypot(_[0]-w[0],_[1]-w[1]))}const g=[],T=[],m=[],y=[];let D=0;for(let x=0;x<i;x++){const w=t[x+1].distanceTo(t[x]),_=g.length/3,v=[[f[x],D],[f[x+1],D+w]];for(const[M,b]of v)for(let S=0;S<=c;S++){const P=M[S%c],[C,E]=e.normals[S%c],N=l[x].clone().multiplyScalar(C).addScaledVector(o[x],E);g.push(P.x,P.y,P.z),T.push(N.x,N.y,N.z),m.push(b,p[S])}for(let M=0;M<c;M++){const b=_+M,S=_+c+1+M;y.push(b,S,b+1,b+1,S,S+1)}D+=w}const F=[[0,-1,0],[i,1,i-1]];for(const[x,w,_]of F){const v=g.length/3,M=t[x],b=a[_].clone().multiplyScalar(w);g.push(M.x,M.y,M.z),T.push(b.x,b.y,b.z),m.push(x?D:0,0);for(let S=0;S<c;S++){const P=f[x][S];g.push(P.x,P.y,P.z),T.push(b.x,b.y,b.z),m.push(e.pts[S][0]+(x?D:0),e.pts[S][1])}for(let S=0;S<c;S++){const P=v+1+S,C=v+1+(S+1)%c;w>0?y.push(v,C,P):y.push(v,P,C)}}const R=new St;return R.setAttribute("position",new ze(g,3)),R.setAttribute("normal",new ze(T,3)),R.setAttribute("uv",new ze(m,2)),R.setIndex(y),R}function pi(s){switch(s){case"woodRect":return Mt(.07,.045,.012);case"steelSquare":return Mt(.04,.04,.004,0,3);case"woodRound":return Nt(.025);default:return Nt(.0212)}}function mi(s,e,t){var T;const i=I(()=>{const m=ue.concrete();return new me({map:m.map,roughnessMap:m.roughnessMap,normalMap:m.normalMap,normalScale:new O(.9,.9),color:"#e4e0da"})},[]),r=I(()=>{const m=ue.plaster();return new me({map:m.map,roughnessMap:m.roughnessMap,normalMap:m.normalMap,normalScale:new O(.4,.4),color:"#f4efe8"})},[]),a=I(()=>{const m=ue.parquet();return new Re({map:m.map,roughnessMap:m.roughnessMap,normalMap:m.normalMap,clearcoat:.35,clearcoatRoughness:.35})},[]),n=I(()=>{const m=ue.wood(s.woodSpecies,s.woodTone);return new Re({map:m.map,roughnessMap:m.roughnessMap,normalMap:m.normalMap,normalScale:new O(.35,.35),clearcoat:.5,clearcoatRoughness:.18})},[s.woodSpecies,s.woodTone]),l=(T=zt.find(m=>m.id===s.finish))!=null?T:zt[0],o=I(()=>{const m=ue.brushed(),y=s.finish==="black";return new Re({color:l.color,metalness:y?.25:1,roughness:l.roughness*(y?1:1.6),roughnessMap:s.finish==="satin"?m.roughnessMap:null,clearcoat:y?.2:0,envMapIntensity:1.2})},[s.finish]),h=I(()=>new me({color:"#111213",roughness:.85}),[]),c=I(()=>new me({color:"#c9ccce",metalness:1,roughness:.3}),[]),u=I(()=>{const m={clear:{color:"#ffffff",att:"#cfe6dc",dist:.45,rough:0,edge:"#5f9783"},optiwhite:{color:"#ffffff",att:"#f4fbfa",dist:3,rough:0,edge:"#b5d2ca"},bronze:{color:"#f0d8bb",att:"#8b5a31",dist:.08,rough:0,edge:"#5a3a22"},graphite:{color:"#d4d8db",att:"#3f474d",dist:.08,rough:0,edge:"#2c3236"},satin:{color:"#ffffff",att:"#e2efeb",dist:1,rough:.42,edge:"#c2d3ce"}}[s.tint],y=new Re({color:m.color,metalness:0,roughness:m.rough,transmission:e==="high"?1:0,transparent:e!=="high",opacity:e==="high"?1:s.tint==="satin"?.55:.28,thickness:.02,ior:1.52,attenuationColor:new le(m.att),attenuationDistance:m.dist,specularIntensity:1,specularColor:new le("#ffffff"),clearcoat:1,clearcoatRoughness:.03,envMapIntensity:2.2,side:zs});return[new Re({color:m.edge,metalness:0,roughness:s.tint==="satin"?.5:.08,transmission:e==="high"?.35:0,transparent:!0,opacity:.92,ior:1.52,thickness:.05,envMapIntensity:1.4}),y]},[s.tint,e]),f=A.useMemo(()=>[u[0],u[0],u[0],u[0],u[1],u[1]],[u]),p=I(()=>new me({color:"#fff4e0",emissive:new le("#ffc781"),emissiveIntensity:2}),[]),g=I(()=>new bt({color:"#ffb766",alphaMap:ue.lightPool(),transparent:!0,depthWrite:!1,blending:Lt,side:vt,toneMapped:!1}),[]);return A.useEffect(()=>{p.emissiveIntensity=t?9:1.6,g.opacity=t?.85:.12},[t,p,g]),{concrete:i,plaster:r,parquet:a,wood:n,metal:o,rubber:h,steel:c,glassArray:f,lamp:p,pool:g}}function gi({f:s,m:e,cladding:t}){const i=I(()=>di(s),[s]),r=A.useMemo(()=>fi(s),[s]),a=I(()=>{if(!t)return[];const n=[],{rise:l,going:o,steps:h,width:c}=s;for(let u=0;u<h-1;u++){const f=new ee(o+.03,.04,c);f.translate((u*o-.03+(u+1)*o)/2,(u+1)*l+.02,c/2),n.push(Me(f,"z",[u*.37,u*.21]))}for(let u=0;u<h;u++){const f=u*l+(u>0?.04:0),p=new ee(.02,(u+1)*l-f,c);p.translate(u*o-.01,(f+(u+1)*l)/2,c/2),n.push(Me(p,"z",[u*.53,.1]))}return n},[s,t]);return d.jsxs("group",{matrixAutoUpdate:!1,matrix:r,children:[d.jsx("mesh",{geometry:i,material:e.concrete,castShadow:!0,receiveShadow:!0}),a.map((n,l)=>d.jsx("mesh",{geometry:n,material:e.wood,castShadow:!0,receiveShadow:!0},l))]})}function Ft({s,top:e,m:t,column:i}){const r=I(()=>Ze(s).geo,[s]),a=I(()=>Ze(s,.04,.04).geo,[s]),n=Ze(s).pos,l=Ze(s,.04,.04).pos,o=s.top-s.thickness;return d.jsxs(d.Fragment,{children:[d.jsx("mesh",{geometry:r,material:t.concrete,position:n,castShadow:!0,receiveShadow:!0}),e&&d.jsx("mesh",{geometry:a,material:e,position:l,castShadow:!0,receiveShadow:!0}),i&&d.jsx("mesh",{material:t.concrete,position:[(s.minX+s.maxX)/2,o/2,(s.minZ+s.maxZ)/2],castShadow:!0,receiveShadow:!0,children:d.jsx("boxGeometry",{args:[.3,o,.3]})})]})}function vi(s,e){let i=0,r=1;for(const[a,n,l,o]of[[s.a.x,s.b.x,e.minX,e.maxX],[s.a.z,s.b.z,e.minZ,e.maxZ]]){if(Math.abs(n-a)<1e-6){if(a<l-.06||a>o+.06)return null;continue}const h=(l-a)/(n-a),c=(o-a)/(n-a);i=Math.max(i,Math.min(h,c)),r=Math.min(r,Math.max(h,c))}return r-i>.02?[i,r]:null}function xi({layout:s,m:e}){const t=s.topY+Gt,i=I(()=>s.walls.map(n=>{const l=Math.hypot(n.b.x-n.a.x,n.b.z-n.a.z),o=new Ot(l,t);return o.translate(0,t/2,0),Me(o,null,[Math.hypot(n.a.x,n.a.z),0])}),[s.walls,t]),r=I(()=>{const n=[],l=(o,h,c,u)=>{const f=o.a.x+(o.b.x-o.a.x)*h,p=o.a.z+(o.b.z-o.a.z)*h,g=o.a.x+(o.b.x-o.a.x)*c,T=o.a.z+(o.b.z-o.a.z)*c,m=Math.hypot(g-f,T-p);n.push({geo:new ee(m,.08,.014),pos:[(f+g)/2+o.inward.x*.007,u+.04,(p+T)/2+o.inward.z*.007],rot:Se(o.inward)})};for(const o of s.walls){l(o,0,1,0);const h=vi(o,s.slab);h&&l(o,h[0],h[1],s.slab.top+.04)}return Object.assign(n.map(o=>o.geo),{items:n})},[s.walls,s.slab]),a=I(()=>new me({color:"#f1ede6",roughness:.42}),[]);return d.jsxs(d.Fragment,{children:[s.walls.map((n,l)=>d.jsx("mesh",{geometry:i[l],material:e.plaster,position:[(n.a.x+n.b.x)/2-n.inward.x*.003,0,(n.a.z+n.b.z)/2-n.inward.z*.003],rotation:[0,Se(n.inward),0],receiveShadow:!0},l)),r.items.map((n,l)=>d.jsx("mesh",{geometry:n.geo,material:a,position:n.pos,rotation:[0,n.rot,0],castShadow:!0,receiveShadow:!0},`s${l}`))]})}function Mi({layout:s,quality:e}){const t=I(()=>Me(new Ot(60,60)),[]),i=ue.tiles(),r=(s.bounds.minX+s.bounds.maxX)/2,a=(s.bounds.minZ+s.bounds.maxZ)/2;return d.jsx("mesh",{geometry:t,rotation:[-Math.PI/2,0,0],position:[r,0,a],receiveShadow:!0,children:e==="high"?d.jsx(Us,{map:i.map,roughnessMap:i.roughnessMap,normalMap:i.normalMap,normalScale:new O(.5,.5),mirror:0,resolution:1024,blur:[400,120],mixBlur:1,mixStrength:.9,mixContrast:1,depthScale:0,roughness:1,metalness:0,envMapIntensity:.9}):d.jsx("meshStandardMaterial",{map:i.map,roughnessMap:i.roughnessMap,normalMap:i.normalMap})})}function Si({layout:s,m:e,cladding:t}){return d.jsx(d.Fragment,{children:s.stepLights.map((i,r)=>d.jsxs("group",{position:[i.x,0,i.z],rotation:[0,Se(i.normal),0],children:[d.jsx("mesh",{position:[0,i.y+(t?.02:0),.004],material:e.lamp,children:d.jsx("boxGeometry",{args:[.13,.04,.008]})}),d.jsx("mesh",{position:[0,i.treadY+(t?.043:.003),.22],rotation:[Math.PI/2,0,0],material:e.pool,renderOrder:2,userData:{noAO:!0},children:d.jsx("planeGeometry",{args:[.6,.44]})})]},r))})}function wi({layout:s,m:e}){const t=I(()=>s.railing.panels.map(i=>xt(i.width,i.height,i.thickness,i.slope)),[s.railing.panels]);return d.jsx(d.Fragment,{children:s.railing.panels.map((i,r)=>d.jsx("mesh",{geometry:t[r],material:e.glassArray,userData:{noAO:!0},position:[i.origin.x,i.bottom,i.origin.z],rotation:[0,Qe(i.dir),0],renderOrder:1},r))})}function bi({layout:s,m:e,t}){const i=I(()=>s.railing.profiles.flatMap(r=>[xt(r.length,.15,.06,r.slope),xt(r.length,.008,t+.014,r.slope)]),[s.railing.profiles,t]);return d.jsx(d.Fragment,{children:s.railing.profiles.map((r,a)=>d.jsxs("group",{position:[r.origin.x,0,r.origin.z],rotation:[0,Qe(r.dir),0],children:[d.jsx("mesh",{geometry:i[a*2],material:e.metal,position:[0,r.bottom,0],castShadow:!0,receiveShadow:!0}),d.jsx("mesh",{geometry:i[a*2+1],material:e.rubber,position:[0,r.bottom+.15,0]})]},a))})}function Ti({p:s,layout:e,m:t,t:i}){const r=Bs(s.mount,i),a=I(()=>({barrel:new Ge(.0125,.0125,1,24).rotateX(Math.PI/2),cap:new Ge(.025,.025,1,40).rotateX(Math.PI/2),clamp:new ee(.055,.075,1),mini:new ee(.045,1,.05),plate:new ee(.085,.008,.085),post:new Ge(.0212,.0212,1,32),flange:new Ge(.045,.048,.012,40),postClamp:new ee(.04,.055,.032),dispose(){Object.values(this).forEach(o=>o instanceof St&&o.dispose())}}),[]),n=s.heightMm/1e3,l=Ht(s.handrail);return d.jsxs(d.Fragment,{children:[s.mount==="pointFix"&&e.railing.fixings.map((o,h)=>d.jsxs("group",{position:[o.x,o.y,o.z],rotation:[0,Se(o.normal),0],children:[d.jsx("mesh",{geometry:a.barrel,material:t.metal,position:[0,0,-(r+i/2)/2],scale:[1,1,r-i/2],castShadow:!0}),d.jsx("mesh",{geometry:a.cap,material:t.metal,position:[0,0,i/2+.007],scale:[1,1,.014],castShadow:!0}),d.jsx("mesh",{geometry:a.cap,material:t.metal,position:[0,0,-i/2-.004],scale:[1,1,.008]}),d.jsx("mesh",{geometry:a.cap,material:t.metal,position:[0,0,-r+.003],scale:[1.1,1.1,.006]})]},h)),s.mount==="clamps"&&e.railing.fixings.map((o,h)=>d.jsx("group",{position:[o.x,o.y,o.z],rotation:[0,Se(o.normal),0],children:d.jsx("mesh",{geometry:a.clamp,material:t.metal,position:[0,0,(-r+i/2+.012)/2],scale:[1,1,r+i/2+.012],castShadow:!0})},h)),s.mount==="miniPosts"&&e.railing.fixings.map((o,h)=>d.jsxs("group",{position:[o.x,o.base,o.z],rotation:[0,Qe(o.dir),0],children:[d.jsx("mesh",{geometry:a.plate,material:t.metal,position:[0,.004,0],castShadow:!0}),d.jsx("mesh",{geometry:a.mini,material:t.metal,position:[0,(o.top-o.base)/2,0],scale:[1,o.top-o.base,1],castShadow:!0})]},h)),s.mount==="posts"&&e.railing.posts.map((o,h)=>{const c=o.top-(n-l/2);return d.jsxs("group",{position:[o.x,o.base,o.z],rotation:[0,Qe(o.dir),0],children:[d.jsx("mesh",{geometry:a.flange,material:t.metal,position:[0,.006,0],castShadow:!0}),d.jsx("mesh",{geometry:a.post,material:t.metal,position:[0,(o.top-o.base)/2,0],scale:[1,o.top-o.base,1],castShadow:!0}),[c+.26-o.base,c+n-.3-o.base].map(u=>[-1,1].map(f=>d.jsx("mesh",{geometry:a.postClamp,material:t.metal,position:[f*.034,u,0],castShadow:!0},`${u}${f}`)))]},h)})]})}function It({paths:s,channels:e=[],kind:t,m:i}){var o,h;const r=(h=(o=kt.find(c=>c.id===t))==null?void 0:o.wood)!=null?h:!1,a=Ht(t),n=I(()=>s.filter(c=>c.length>1).map(c=>Ut(c,pi(t))),[s,t]),l=I(()=>e.map(c=>Ut(c,Mt(.03,.02,.002,-(a/2+.009),2))),[e,a]);return d.jsxs(d.Fragment,{children:[n.map((c,u)=>d.jsx("mesh",{geometry:c,material:r?i.wood:i.metal,castShadow:!0,receiveShadow:!0},u)),l.map((c,u)=>d.jsx("mesh",{geometry:c,material:i.steel,castShadow:!0},`c${u}`))]})}function Pi({layout:s,m:e}){return d.jsx(d.Fragment,{children:s.wallBrackets.map((t,i)=>d.jsxs("group",{position:[t.x,t.y-.045,t.z],rotation:[0,Se(t.normal),0],children:[d.jsx("mesh",{material:e.metal,position:[0,0,.004],rotation:[Math.PI/2,0,0],children:d.jsx("cylinderGeometry",{args:[.03,.03,.008,32]})}),d.jsx("mesh",{material:e.metal,position:[0,0,.04],rotation:[Math.PI/2,0,0],castShadow:!0,children:d.jsx("cylinderGeometry",{args:[.007,.007,.075,16]})}),d.jsx("mesh",{material:e.metal,position:[0,.012,.075],castShadow:!0,children:d.jsx("boxGeometry",{args:[.05,.012,.025]})})]},i))})}function yi({p:s,layout:e}){const t=e.openEdge[0],i=t.normal,r=s.heightMm/1e3,a={x:(t.a.x+t.b.x)/2,z:(t.a.z+t.b.z)/2},n=(t.ya+t.yb)/2,l=.32,o={x:t.a.x+i.x*.55-(t.b.x-t.a.x)*.05,z:t.a.z+i.z*.55-(t.b.z-t.a.z)*.05},h=e.openEdge.find((c,u)=>u===e.openEdge.length-1&&c.kind==="level"&&s.topLength>0);return d.jsxs("group",{children:[d.jsx(Ct,{points:[[a.x+i.x*l,n,a.z+i.z*l],[a.x+i.x*l,n+r,a.z+i.z*l]],color:"#fd7e14",lineWidth:1.6,userData:{noAO:!0}}),d.jsx(ke,{position:[a.x+i.x*l,n+r/2,a.z+i.z*l],center:!0,zIndexRange:[20,0],children:d.jsxs("span",{className:"dim-label",children:[s.heightMm," мм"]})}),d.jsx(Ct,{points:[[o.x,0,o.z],[o.x,e.topY,o.z]],color:"#ffffff",userData:{noAO:!0},lineWidth:1.2,dashed:!0,dashSize:.08,gapSize:.05}),d.jsx(ke,{position:[o.x,e.topY/2,o.z],center:!0,zIndexRange:[20,0],children:d.jsxs("span",{className:"dim-label muted",children:["↕ ",mt(e.topY,2)," м"]})}),d.jsx(ke,{position:[a.x+i.x*.1,n+r+.18,a.z+i.z*.1],center:!0,zIndexRange:[20,0],children:d.jsxs("span",{className:"dim-label",children:[mt(e.railing.length,2)," м ограждения"]})}),h&&d.jsx(ke,{position:[(h.a.x+h.b.x)/2,h.ya+r+.2,(h.a.z+h.b.z)/2],center:!0,zIndexRange:[20,0],children:d.jsxs("span",{className:"dim-label",children:[mt(s.topLength,2)," м"]})})]})}function Ei(s,e,t){var T;const i=[],r=[];for(const m of s.flights)i.push(m.origin.x,m.origin.x+m.dir.x*m.run),r.push(m.origin.z,m.origin.z+m.dir.z*m.run);for(const m of s.landings)i.push(m.minX,m.maxX),r.push(m.minZ,m.maxZ);const a=new U((Math.min(...i)+Math.max(...i))/2,s.topY*.45,(Math.min(...r)+Math.max(...r))/2),l=(Math.max(Math.max(...i)-Math.min(...i),Math.max(...r)-Math.min(...r),s.topY)+1)*1.35/t,o=s.openEdge[0].normal,h=s.flights[0].dir,c=s.flights.length===1?"straight":s.openEdge.some(m=>m.kind==="level"&&s.openEdge.indexOf(m)===1)?"u":"l",[u,f,p]={straight:[-.6,1.05,.38],l:[-1.05,.5,.3],u:[-1,-.45,.13]}[c],g=a.clone();if(e==="perspective")g.add(new U(o.x*f+h.x*u,p,o.z*f+h.z*u).multiplyScalar(l));else if(e==="side")g.add((c==="u"?new U(h.x,.25,h.z):new U(o.x,.12,o.z)).multiplyScalar(l));else if(e==="top")g.add(new U(o.x*.02,1.4,o.z*.02).multiplyScalar(l));else{const m=s.railing.panels.filter(F=>F.kind==="flight"),y=(T=m[Math.floor(m.length/4)])!=null?T:s.railing.panels[0],D=y.width*.2;a.set(y.origin.x+y.dir.x*D,y.bottom+y.slope*D+.12,y.origin.z+y.dir.z*D),g.copy(a).add(new U(o.x*1-h.x*.5,.22,o.z*1-h.z*.5).multiplyScalar(1.3/t))}return{pos:g,target:a}}function _i({layout:s,view:e,zoom:t,reset:i,frameKey:r}){const a=H(c=>c.camera),n=H(c=>c.controls),l=H(c=>c.invalidate),o=A.useRef({pos:new U,target:new U,active:!1,first:!0}),h=A.useRef(s);return h.current=s,A.useEffect(()=>{const c=Ei(h.current,e,t),u=o.current;u.pos.copy(c.pos),u.target.copy(c.target),u.first&&n?(a.position.copy(c.pos),n.target.copy(c.target),n.update(),u.first=!1):u.active=!0,l()},[e,t,i,r,n,a,l]),A.useEffect(()=>{if(!n)return;const c=()=>{o.current.active=!1};return n.addEventListener("start",c),()=>n.removeEventListener("start",c)},[n]),Bt((c,u)=>{const f=o.current;if(!f.active||!n)return;const p=1-Math.exp(-Math.min(u,.05)*5);a.position.lerp(f.pos,p),n.target.lerp(f.target,p),n.update(),a.position.distanceToSquared(f.pos)<1e-5?f.active=!1:l()}),null}function Ci(s){const e=s.openEdge[0].normal,t=s.flights[0].dir;return new U(e.x*.62+t.x*.5,.66,e.z*.62+t.z*.5).normalize()}const Di=s=>new As(0,Math.atan2(-s.z,s.x),0);function Ri({center:s,sun:e}){const t=I(()=>{const a=new Vt;a.moveTo(-14,-14),a.lineTo(14,-14),a.lineTo(14,14),a.lineTo(-14,14),a.closePath();const n=.95,l=.08;for(let o=-2;o<=1;o++){const h=o*(n+l)+l/2;for(const[c,u]of[[-1.25,1.75],[.58,.62]]){const f=new Fs;f.moveTo(h,c),f.lineTo(h,c+u),f.lineTo(h+n,c+u),f.lineTo(h+n,c),f.closePath(),a.holes.push(f)}}return new Is(a)},[]),i=I(()=>new bt({colorWrite:!1,depthWrite:!1,side:vt,shadowSide:vt}),[]),r=A.useRef(null);return A.useLayoutEffect(()=>{const a=r.current;a&&(a.position.copy(s).addScaledVector(e,5.5),a.lookAt(s))},[s,e]),d.jsx("mesh",{ref:r,geometry:t,material:i,castShadow:!0,userData:{noAO:!0}})}function zi({layout:s,night:e,quality:t,sun:i}){const r=A.useRef(null),a=s.bounds,n=(a.minX+a.maxX)/2,l=(a.minZ+a.maxZ)/2,o=Math.max(a.maxX-a.minX,a.maxZ-a.minZ,s.topY)*.75+2,h=A.useMemo(()=>new U(n,s.topY*.3,l),[n,l,s.topY]),c=s.flights[0],u=A.useMemo(()=>new U(c.origin.x+c.dir.x*c.run*.55,c.y0+c.steps*c.rise*.45,c.origin.z+c.dir.z*c.run*.55),[c]);A.useLayoutEffect(()=>{const p=r.current;if(!p)return;p.position.copy(h).addScaledVector(i,16),p.target.position.copy(h),p.target.updateMatrixWorld();const g=p.shadow.camera;g.left=-o,g.right=o,g.top=o,g.bottom=-o,g.near=1,g.far=34,g.updateProjectionMatrix(),p.shadow.needsUpdate=!0},[h,o,i]);const f=t==="high"?4096:2048;return d.jsxs(d.Fragment,{children:[d.jsx("directionalLight",{ref:r,intensity:e?0:3.4,color:"#fff0d8",castShadow:!0,"shadow-mapSize":[f,f],"shadow-bias":-2e-4,"shadow-normalBias":.02,"shadow-radius":5}),!e&&d.jsx(Ri,{center:u,sun:i}),t==="high"&&d.jsx(Ns,{size:14,samples:14,focus:.35}),e&&[[n,s.topY-.4,l],[n,s.topY+Gt-.3,l],[a.minX-1,s.topY-.4,l]].map((p,g)=>d.jsx("pointLight",{position:p,intensity:7,distance:9,decay:2,color:"#ffcf9a"},g))]})}function Ai({night:s}){const e=H(o=>o.gl),t=H(o=>o.scene),i=H(o=>o.camera),r=H(o=>o.size),a=H(o=>o.viewport.dpr),n=H(o=>o.invalidate),l=A.useMemo(()=>{const o=new fe(1,1,{type:Z,samples:4}),h=new Xs(e,o),c=new Y(t,i,1,1);c.blendIntensity=.9,c.updateGtaoMaterial({radius:.32,distanceExponent:1.6,thickness:1.2,scale:1,samples:16}),c.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16});const u=c.overrideVisibility.bind(c);c.overrideVisibility=()=>{u(),t.traverse(p=>{p.userData.noAO&&(p.visible=!1)})};const f=new xe(new O(1,1),.15,.45,.95);return h.addPass(new Js(t,i)),h.addPass(c),h.addPass(f),h.addPass(new Ks),{composer:h,gtao:c,bloom:f,target:o}},[e,t,i]);return A.useEffect(()=>{l.composer.setPixelRatio(a),l.composer.setSize(r.width,r.height),n()},[l,r,a,n]),A.useEffect(()=>{l.bloom.strength=s?.55:.12,l.bloom.threshold=s?.75:.95,n()},[l,s,n]),A.useEffect(()=>()=>{l.composer.dispose(),l.gtao.dispose(),l.bloom.dispose(),l.target.dispose()},[l]),Bt(()=>l.composer.render(),1),null}function Ni({p:s,view:e,zoom:t,reset:i,dimensions:r,night:a,quality:n,onReady:l}){var D,F,R;const o=A.useMemo(()=>Ls(s),[s]);A.useEffect(()=>{let x=requestAnimationFrame(()=>{x=requestAnimationFrame(l)});return()=>cancelAnimationFrame(x)},[l]);const h=Cs(Os,ti);A.useLayoutEffect(()=>{h.mapping=Ds},[h]);const c=mi(s,n,a),u=(F=(D=o.railing.panels[0])==null?void 0:D.thickness)!=null?F:.017,f=H(x=>x.invalidate),p=H(x=>x.gl);A.useEffect(()=>{p.toneMappingExposure=a?1.25:1,f();let x=0,w=0;const _=()=>{f(),++x<3&&(w=requestAnimationFrame(_))};return w=requestAnimationFrame(_),()=>cancelAnimationFrame(w)},[o,a,n,r,s,p,f]);const g=`${o.openEdge[0].normal.x},${o.openEdge[0].normal.z},${o.flights[0].dir.x},${o.flights[0].dir.z}`,T=A.useMemo(()=>Ci(o),[g]),m=A.useMemo(()=>Di(T),[T]),y=s.mount!=="posts"&&((R=kt.find(x=>x.id===s.handrail))==null?void 0:R.wood)===!0;return d.jsxs(d.Fragment,{children:[d.jsx(Rs,{map:h,background:!0,backgroundBlurriness:.45,backgroundIntensity:a?.03:.75,environmentIntensity:a?.07:1.05,environmentRotation:m,backgroundRotation:m}),n==="high"&&d.jsx(Ai,{night:a}),d.jsx(zi,{layout:o,night:a,quality:n,sun:T}),d.jsx(Mi,{layout:o,quality:n}),d.jsx(xi,{layout:o,m:c}),o.flights.map((x,w)=>d.jsx(gi,{f:x,m:c,cladding:s.cladding},w)),o.landings.map((x,w)=>d.jsx(Ft,{s:x,m:c,top:s.cladding?c.wood:null,column:s.bothSides},w)),d.jsx(Ft,{s:o.slab,m:c,top:c.parquet,column:!1}),d.jsx(Si,{layout:o,m:c,cladding:s.cladding}),d.jsx(wi,{layout:o,m:c}),d.jsx(bi,{layout:o,m:c,t:u}),d.jsx(Ti,{p:s,layout:o,m:c,t:u}),s.handrail!=="none"&&d.jsx(It,{paths:o.railing.handrail,channels:y?o.railing.channels:[],kind:s.handrail,m:c}),o.wallRail.length>0&&d.jsxs(d.Fragment,{children:[d.jsx(It,{paths:o.wallRail,kind:"woodRound",m:c}),d.jsx(Pi,{layout:o,m:c})]}),r&&d.jsx(yi,{p:s,layout:o}),d.jsx(_i,{layout:o,view:e,zoom:t,reset:i,frameKey:`${s.shape}${s.side}${s.bothSides}`})]})}class Ui extends A.Component{constructor(){super(...arguments);Pt(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?d.jsx("div",{className:"scene-error",role:"alert",children:"3D-просмотр недоступен в этом браузере (WebGL отключён). Расчёт стоимости и смета работают в полном объёме."}):this.props.children}}function Li(s){A.useEffect(()=>()=>ui(),[]);const[e,t]=A.useState(!1),i=A.useMemo(()=>()=>t(!0),[]);return d.jsxs(Ui,{children:[!e&&d.jsxs("div",{className:"scene-loading",role:"status",children:[d.jsx("span",{className:"spinner"}),"Готовим HDRI-освещение, материалы и модель лестницы…"]}),d.jsxs(ys,{shadows:{type:Es},frameloop:"demand",dpr:s.quality==="high"?[1,2]:[1,1.25],gl:{antialias:!0,preserveDrawingBuffer:!0,toneMapping:jt},camera:{fov:36,near:.05,far:200,position:[8,5,8]},children:[d.jsx(A.Suspense,{fallback:null,children:d.jsx(Ni,{...s,onReady:i})}),d.jsx(_s,{makeDefault:!0,enableDamping:!0,dampingFactor:.08,minDistance:.5,maxDistance:28,maxPolarAngle:Math.PI*.5})]})]})}export{Li as Scene};
