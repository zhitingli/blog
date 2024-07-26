(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{448:function(a,_,t){"use strict";t.r(_);var i=t(2),$=Object(i.a)({},(function(){var a=this,_=a._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h2",{attrs:{id:"为什么会注意到这个方向"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么会注意到这个方向"}},[a._v("#")]),a._v(" 为什么会注意到这个方向")]),a._v(" "),_("blockquote",[_("p",[a._v("Lei Feng, Jiaqi Lv, Bo Han, Miao Xu, Gang Niu, Xin Geng, Bo An, Masashi Sugiyama. "),_("a",{attrs:{href:"https://arxiv.org/pdf/2007.08929.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("Provably Consistent Partial-Label Learning."),_("OutboundLink")],1),a._v(" "),_("em",[a._v("Proceedings of the 34th Conference on Neural Information Processing Systems ("),_("strong",[a._v("NeurIPS'20")]),a._v(")")]),a._v(", pp. 10948-10960, 2020.")])]),a._v(" "),_("p",[a._v("我看到了这篇文章，然后看懂了这篇文章，其原理就是一对一的标签学习+统计的乘法公式/贝叶斯的转化，转化到了一对多的标签学习问题。")]),a._v(" "),_("p",[a._v("所以更加坚信了人工智能是我想做的方向：交叉性、基于理论但是有巨大的现实应用意义")]),a._v(" "),_("h2",{attrs:{id:"生成模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生成模型"}},[a._v("#")]),a._v(" 生成模型")]),a._v(" "),_("p",[a._v("针对什么问题，可以解决什么问题")]),a._v(" "),_("p",[a._v("模型结构是什么")]),a._v(" "),_("p",[a._v("如何训练这个模型")]),a._v(" "),_("h2",{attrs:{id:"vae模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vae模型"}},[a._v("#")]),a._v(" "),_("a",{attrs:{href:"https://www.gwylab.com/note-vae.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("VAE模型"),_("OutboundLink")],1)]),a._v(" "),_("h3",{attrs:{id:"基本思路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本思路"}},[a._v("#")]),a._v(" 基本思路：")]),a._v(" "),_("p",[a._v("把一堆真实样本通过编码器网络变换成一个理想的数据分布，然后这个数据分布再传递给一个解码器网络，得到一堆生成样本，如果生成样本与真实样本足够接近的话，就训练出了一个自编码器模型。VAE（变分自编码器）就是在自编码器模型上做进一步变分处理，使得编码器的输出结果能对应到目标分布的均值和方差，如下图所示。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image001.jpg",alt:"https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/VBcD02jFhglfkZGTLyG60rcuZfgLf2T2sOWXic8RwekfcDHGpUew6q9TuXor5aPg8tTuTAWuF6dJdZwxhXTib5Ow/640"}})]),a._v(" "),_("h3",{attrs:{id:"_1-vae最想解决什么问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-vae最想解决什么问题"}},[a._v("#")]),a._v(" 1. VAE最想解决什么问题？")]),a._v(" "),_("p",[a._v("如何构造编码器和解码器，使得图片能够编码成易于表示的形态，并且这一形态能够尽可能无损地解码还原真实图像。")]),a._v(" "),_("p",[a._v("这似乎听起来与PCA（主成分分析）有些相似，而PCA本身是用来做矩阵降维的：")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image002.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("如图，$X$本身是一个矩阵，通过一个变换$W$变成了一个低维矩阵$c$，因为这一过程是线性的，所以再通过一个$W^T$变换就能还原出一个$\\hat{X}$，现在我们要找到一种变换$W$，使得矩阵$X$与$\\hat{X}$能够尽可能地一致，这就是PCA做的事情。在PCA中找这个变换$W$用到的方法是SVD（奇异值分解)算法，这是一个纯数学方法，不再细述，因为在VAE中不再需要使用SVD，直接用神经网络代替。")]),a._v(" "),_("p",[a._v("我们会发现PCA与我们想要构造的自编码器的相似之处是在于，如果把矩阵$X$视作输入图像，$W$视作一个编码器，低维矩阵$c$视作图像的编码，然后$W^T$和$\\hat{X}$分别视作解码器和生成图像，PCA就变成了一个自编码器网络模型的雏形。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image005.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("现在我们需要对这一雏形进行改进。首先一个最明显能改进的地方是用神经网络代替W变换和"),_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image003.png",alt:"img"}}),a._v("变换，就得到了如下Deep Auto-Encoder模型：")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image006.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("这一替换的明显好处是，引入了神经网络强大的拟合能力，使得编码（Code）的维度能够比原始图像（X）的维度低非常多。在一个手写数字图像的生成模型中，Deep Auto-Encoder能够把一个784维的向量（28*28图像）压缩到只有30维，并且解码回的图像具备清楚的辨认度（如下图）。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image007.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("至此我们构造出了一个重构图像比较清晰的自编码模型，但是这并没有达到我们真正想要构造的生成模型的标准，因为，对于一个生成模型而言，解码器部分应该是单独能够提取出来的，并且对于在规定维度下任意采样的一个编码，都应该能通过解码器产生一张清晰且真实的图片。")]),a._v(" "),_("h3",{attrs:{id:"_2-vae的设计思路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-vae的设计思路"}},[a._v("#")]),a._v(" 2. VAE的设计思路")]),a._v(" "),_("p",[a._v("我们先来分析一下现有模型无法达到这一标准的原因。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image008.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("如上图所示，假设有两张训练图片，一张是全月图，一张是半月图，经过训练我们的自编码器模型已经能无损地还原这两张图片。接下来，我们在code空间上，两张图片的编码点中间处取一点，然后将这一点交给解码器，我们希望新的生成图片是一张清晰的图片（类似3/4全月的样子）。但是，实际的结果是，生成图片是模糊且无法辨认的乱码图。一个比较合理的解释是，因为编码和解码的过程使用了深度神经网络，这是一个非线性的变换过程，所以在code空间上点与点之间的迁移是非常没有规律的。")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[a._v("如何解决这个问题呢？我们可以引入噪声，使得图片的编码区域得到扩大，从而掩盖掉失真的空白编码点。\n")])])]),_("p",[_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image009.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("如上图所示，现在在给两张图片编码的时候加上一点噪音，使得每张图片的编码点出现在绿色箭头所示范围内，于是在训练模型的时候，绿色箭头范围内的点都有可能被采样到，这样解码器在训练时会把绿色范围内的点都尽可能还原成和原图相似的图片。然后我们可以关注之前那个失真点，现在它处于全月图和半月图编码的交界上，于是解码器希望它既要尽量相似于全月图，又要尽量相似于半月图，于是它的还原结果就是两种图的折中（3/4全月图）。")]),a._v(" "),_("p",[a._v("由此我们发现，给编码器增添一些噪音，可以有效覆盖失真区域。不过这还并不充分，因为在上图的距离训练区域很远的黄色点处，它依然不会被覆盖到，仍是个失真点。为了解决这个问题，我们可以试图把噪音无限拉长，使得对于每一个样本，它的编码会覆盖整个编码空间，不过我们得保证，在原编码附近编码的概率最高，离原编码点越远，编码概率越低。在这种情况下，图像的编码就由原先离散的编码点变成了一条连续的编码分布曲线，如下图所示。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image010.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("那么上述的这种"),_("strong",[a._v("将图像编码由离散变为连续的方法")]),a._v("，就是变分自编码的核心思想。下面就会介绍VAE的模型架构，以及解释VAE是如何实现上述构思的。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image010.jpg",alt:"img"}})]),a._v(" "),_("h3",{attrs:{id:"_3-vae的模型架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-vae的模型架构"}},[a._v("#")]),a._v(" 3. VAE的模型架构")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image011.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("上面这张图就是VAE的模型架构，我们先粗略地领会一下这个模型的设计思想。")]),a._v(" "),_("p",[a._v("在auto-encoder中，编码器是直接产生一个编码的，但是在VAE中，为了给编码添加合适的噪音，编码器会输出两个编码，一个是原有编码$(m_1,m_2,m_3)$，另外一个是控制噪音干扰程度的编码$(\\sigma_1,\\sigma_2,\\sigma_3)$，第二个编码其实很好理解，就是为随机噪音码$(e_1,e_2,e_3)$分配权重，然后加上$\\exp(\\sigma_i)$的目的是为了保证这个分配的权重是个正值，最后将原编码与噪音编码相加，就得到了VAE在code层的输出结果$(c_1,c_2,c_3)$。其它网络架构都与Deep Auto-encoder无异。")]),a._v(" "),_("p",[a._v("损失函数方面，除了必要的重构损失外，VAE还增添了一个损失函数（见上图Minimize2内容），这同样是必要的部分，因为如果不加的话，整个模型就会出现问题：为了保证生成图片的质量越高，编码器肯定希望噪音对自身生成图片的干扰越小，于是分配给噪音的权重越小，这样只需要将$(\\sigma_1,\\sigma_2,\\sigma_3)$赋为接近负无穷大的值就好了。所以，第二个损失函数就有限制编码器走这样极端路径的作用，这也从直观上就能看出来，$\\exp(\\sigma_i)-(1+\\sigma_i)$在$\\sigma_i=0$处取得最小值，于是$(\\sigma_1,\\sigma_2,\\sigma_3)$就会避免被赋值为负无穷大。")]),a._v(" "),_("p",[a._v("上述我们只是粗略地理解了VAE的构造机理，但是还有一些更深的原理需要挖掘，例如第二个损失函数为何选用这样的表达式，以及VAE是否真的能实现我们的预期设想，即“图片能够编码成易于表示的形态，并且这一形态能够尽可能无损地解码回原真实图像”，是否有相应的理论依据。")]),a._v(" "),_("p",[a._v("下面我们会从理论上深入地分析一下VAE的构造依据以及作用原理。")]),a._v(" "),_("h3",{attrs:{id:"_4-vae的作用原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-vae的作用原理"}},[a._v("#")]),a._v(" 4. VAE的作用原理")]),a._v(" "),_("p",[a._v("我们知道，对于生成模型而言，主流的理论模型可以分为隐马尔可夫模型HMM、朴素贝叶斯模型NB和高斯混合模型GMM，而VAE的理论基础就是高斯混合模型。")]),a._v(" "),_("p",[a._v("什么是高斯混合模型呢？就是说，任何一个数据的分布，都可以看作是若干高斯分布的叠加。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image017.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("如图所示，如果P(X)代表一种分布的话，存在一种拆分方法能让它表示成图中若干浅蓝色曲线对应的高斯分布的叠加。有意思的是，这种拆分方法已经证明出，当拆分的数量达到512时，其叠加的分布相对于原始分布而言，误差是非常非常小的了。")]),a._v(" "),_("p",[a._v("于是我们可以利用这一理论模型去考虑如何给数据进行编码。一种最直接的思路是，直接用每一组高斯分布的参数作为一个编码值实现编码。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image018.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("如上图所示，$m$代表着编码维度上的编号，譬如实现一个512维的编码，$m$的取值范围就是$1,2,3……512$。$m$会服从于一个概率分布$P(m)$（多项式分布）。现在编码的对应关系是，每采样一个m，其对应到一个小的高斯分布$N(\\mu^m,\\Sigma^m),P(X)$就可以等价为所有的这些高斯分布的叠加，即：\n$$\np(x)=\\sum_m p(m)p(x|m)\n$$\n其中,$m\\sim p(m),x|m \\sim N(\\mu^m,\\Sigma^m)$")]),a._v(" "),_("p",[a._v("上述的这种编码方式是非常简单粗暴的，它对应的是我们之前提到的离散的、有大量失真区域的编码方式。于是我们需要对目前的编码方式进行改进，使得它成为连续有效的编码。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image023.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("现在我们的编码换成一个连续变量$z$，我们规定$z$服从正态分布$N(0,1)$（实际上并不一定要选用$N(0,1)$，其他的连续分布都是可行的）。每对于一个采样$z$，会有两个函数$\\mu$和$\\sigma$，分别决定$z$对应到的高斯分布的均值和方差，然后在积分域上所有的高斯分布的累加就成为了原始分布$P(X)$,即：\n$$\np(x)=\\int_z p(z)p(x|z)dz\n$$\n其中,$z\\sim p(z),x|z \\sim N(\\mu(z),\\Sigma(z))$")]),a._v(" "),_("p",[a._v("接下来就可以求解这个式子。由于$p(z)$是已知的，$p(x|z)$未知，而$x|z\\sim N(\\mu(z),\\Sigma(z))$，于是我们真正需要求解的是"),_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image025.png",alt:"img"}}),a._v("和"),_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image026.png",alt:"img"}}),a._v("两个函数的表达式。又因为$p(x)$通常非常复杂，导致$\\mu$和$\\Sigma$难以计算，我们需要引入两个神经网络来帮助我们求解。")]),a._v(" "),_("p",[a._v("第一个神经网络叫做Decoder，它求解的是$\\mu$和$\\Sigma$两个函数，这等价于求解$p(x|z)$。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image033.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("第二个神经网络叫做Encoder，它求解的结果是$q(z|x)$，$q$可以代表任何分布。")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image036.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("值得注意的是，这儿引入第二个神经网路Encoder的目的是，辅助第一个Decoder求解$p(x|z)$，这也是整个VAE理论中最精妙的部分，下面我会详细地解释其中的奥妙。")]),a._v(" "),_("p",[a._v("我们先回到最开始要求解的目标式：\n$$\np(x)=\\int_z p(z)p(x|z)dz\n$$\n我们希望$p(x)$越大越好，这等价于求解：\n$$\nMaximum\\ L=\\sum_x \\log p(x)\n$$\n注意到：\n$$\n\\begin{aligned}\n\\log p(x)&=\\int_z q(z|x)\\log p(x)dz\\\n&=\\int_z q(z|x)\\log(\\frac{p(z,x)}{p(z|x)})dz\\\n&=\\int_z q(z|x)\\log (\\frac{p(z,x)}{q(z|x)}.\\frac{q(z|x)}{p(z|x)})dz\\\n&=\\int_zq(z|x)\\log(\\frac{p(z,x)}{q(z|x)})dz+\\int_z q(z|x)\\log(\\frac{q(z|x)}{p(z|x)})dz\\\n&=\\int_zq(z|x)\\log(\\frac{p(z,x)}{q(z|x)})dz+KL(q(z|x)||p(z|x))\n\\end{aligned}\n$$\n由于KL散度始终大于0，因此我们找到了$\\log p(x)$的下界：\n$$\n\\log p(x)\\geq \\int_z q(z|x)\\log(\\frac{p(x|z)p(z)}{q(z|x)})dz\n$$\n我们将这个下界记为$L_b=\\int_z q(z|x)\\log(\\frac{p(x|z)p(z)}{q(z|x)})dz$")]),a._v(" "),_("blockquote",[_("p",[a._v("总结：$\\log p(x)=L_b+KL(q(z|x)||p(z|x))$")])]),a._v(" "),_("p",[a._v("接下来，VAE思维的巧妙设计就体现出来了。原本我们需要求解$p(x|z)$使得$\\log p(x)$最大，现在引入了一个$q(z|x)$，变成了同时求$p(x|z)、q(z|x)$使得$\\log p(x)$最大。不妨观察一下$\\log p(x)$与$L_b$的关系：")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image051.jpg",alt:"img"}})]),a._v(" "),_("p",[a._v("一个有趣的现象是，当我们固定住$p(x|z)$，因为$\\log p(x)$只与$p(x|z)$有关，所以$\\log p(x)$的值不会变，此时我们去调节$q(z|x)$，使得$L_b$越来越高，同时KL散度越来越小，当我们调节到$q(z|x)$与$p(z|x)$完全一致的时候，KL散度就消失为0，$L_b$与$\\log p(x)$完全一致。")]),a._v(" "),_("blockquote",[_("p",[a._v("结论：不论$\\log p(x)$的值如何，我们总能够通过调节$L_{b}$等于$\\log p(x)$，又因为$L_{b}$是$\\log p(x)$的下界，所以求解$Maximum \\log p(x)$等价于求解$Maximum L_b$.")])]),a._v(" "),_("p",[a._v("这个现象从宏观上来看也是很有意思，调节$p(x|z)$就是在调节Decoder，调节$q(z|x)$就是在调节Encoder。于是，VAE的训练逻辑就变成了，Decoder每前进一步，Encoder就调节成与其一致的样子，并且站在那里拿“枪”顶住Decoder，这样Decoder在下次训练的时候只能前进，不能后退。")]),a._v(" "),_("p",[a._v("上述便是VAE的巧妙设计之处。再回到我们之前的步骤上，现在需求解$Maximum L_b$")]),a._v(" "),_("p",[a._v("注意到：\n$$\n\\begin{aligned}\nL_b&=\\int_z q(z|x)\\log (\\frac{p(z,x)}{q(z|x)})dz\\\n&=\\int_zq(z|x)\\log(\\frac{p(x|z)p(z)}{q(z|x)})dz\\\n&=\\int_zq(z|x)\\log(\\frac{p(z)}{q(z|x)})dz+\\int_zq(z|x)\\log p(x|z)dz\\\n&=-KL(q(z|x)||p(z))+\\int_zq(z|x)\\log p(x|z)dz\n\\end{aligned}\n$$\n结论：求解$Maximum\\ L_b$，等价于求解$KL(q(x|z)||p(z))$的最小值和$\\int_zq(z|x)\\log p(x|z)dz$的最大值。")]),a._v(" "),_("p",[a._v("我们先来求第一项，其实$-KL(q(x|z)||p(z))$的展开式刚好等于：\n$$\n\\sum_{i=1}^J (\\exp(\\sigma_i)-(1+\\sigma_i)+(m_i)^2)\\tag{1}\n$$")]),a._v(" "),_("blockquote",[_("p",[a._v("总结：第$(1)$项式子就是第三节VAE模型架构中第二个损失函数的由来。")])]),a._v(" "),_("p",[a._v("接下来求第二项，注意到\n$$\nMaximum\\ \\int_zq(z|x)\\log(p(x|z))dz\\=Maximum\\ E_{q(z|x)}[\\log p(x|z)]\\tag{2}\n$$\n上面这个期望，也就是表明在给定$q(z|x)$（编码器输出）的情况下$p(x|z)$（解码器输出）的值尽可能高，这其实就是一个类似于Auto-Encoder的损失函数（方差忽略不计的话）：")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://www.gwylab.com/files/VAE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.files/image067.jpg",alt:"img"}})]),a._v(" "),_("blockquote",[_("p",[a._v("总结：第$(2)$项式子就是第三节VAE模型架构中第一个损失函数（重构损失）的由来。")])]),a._v(" "),_("p",[a._v("至此，关于VAE模型架构中的理论证明部分至此全部介绍完毕。")]),a._v(" "),_("h3",{attrs:{id:"_5-训练过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-训练过程"}},[a._v("#")]),a._v(" "),_("a",{attrs:{href:"https://www.cnblogs.com/xxlad/p/11356465.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("5.训练过程"),_("OutboundLink")],1)]),a._v(" "),_("p",[a._v("总结：先调$q(z|x)$——encoder，后调$p(x|z)$——decoder")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181230152028859.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NqaF9qaW5kdW94aWE=,size_16,color_FFFFFF,t_70",alt:"img"}})]),a._v(" "),_("h2",{attrs:{id:"cvae模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cvae模型"}},[a._v("#")]),a._v(" CVAE模型")]),a._v(" "),_("h3",{attrs:{id:"_1-cvae介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-cvae介绍"}},[a._v("#")]),a._v(" "),_("a",{attrs:{href:"https://blog.csdn.net/huang1024rui/article/details/121479133",target:"_blank",rel:"noopener noreferrer"}},[a._v("1. CVAE介绍"),_("OutboundLink")],1)]),a._v(" "),_("ol",[_("li",[a._v("VAE是无监督训练的，因此很自然想到：如果有标签数据，那么能不能把标签信息加进去辅助生成样本呢？这个问题的意图，往往是希望能够实现控制某个变量来实现生成某一类图像。当然，这是肯定可以的，我们把这种情况叫做Conditional VAE，或者叫CVAE。（相应地，在GAN中我们也有个CGAN。）")]),a._v(" "),_("li",[a._v("但是，C V A E 不 是 一 个 特 定 的 模 型 ， 而 是 一 类 模 型。总之就是把 标 签 信 息 融 入 到 V A E 中 的 方 式 有 很 多 ， 目 的 也 不 一 样 。这里基于前面的讨论，给出一种非常简单的VAE。")])]),a._v(" "),_("h3",{attrs:{id:"_2-vae与cvae对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-vae与cvae对比"}},[a._v("#")]),a._v(" 2. VAE与CVAE对比")]),a._v(" "),_("ul",[_("li",[a._v("VAE")])]),a._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/8a4ae99039c6411aae8c345c5856fc7d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAUGF1bC1IdWFuZw==,size_18,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),a._v(" "),_("ul",[_("li",[a._v("CVAE")])]),a._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/3bfa9e48e864414e98fcecb1b9d70e08.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAUGF1bC1IdWFuZw==,size_18,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),a._v(" "),_("blockquote",[_("p",[a._v("结论：VAE中希望$X$经过编码后，$Z$的分布都具有零均值和单位方差，这个“希望”是通过加入了KL loss来实现的。如果现在多了类别信息$Y$。\nCVAE希望同一个类的样本都有一个专属的均值$\\mu^Y$，这个$\\mu^Y$让模型自己训练出来。这样的话，有多少个类就有多少个正态分布，而在生成的时候，我们就可以通过控制均值来控制生成图像的类别。")])]),a._v(" "),_("h4",{attrs:{id:"cvaecapood"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cvaecapood"}},[a._v("#")]),a._v(" CVAECapOOD")]),a._v(" "),_("p",[a._v("模型是什么")]),a._v(" "),_("p",[a._v("损失函数是什么")]),a._v(" "),_("p",[a._v("如何训练")]),a._v(" "),_("h2",{attrs:{id:"rc原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rc原理"}},[a._v("#")]),a._v(" RC原理")]),a._v(" "),_("p",[a._v("关键：乘法公式，贝叶斯公式")]),a._v(" "),_("p",[a._v("根据normal的标签学习/监督学习，我们知道其损失函数可以写成\n$$\nE_{p(x,y)}[L(f(x),y)]=\\int_x p(x,y)L(f(x),y)dx \\tag{1}\n$$\n根据乘法原理，我们假设现在一共有$k$个类别，那么$p(x,y)=\\sum_{i=1}^k p(y=i|x)p(x)$")]),a._v(" "),_("p",[a._v("将上面式子带入$(1)$中我们可以得到\n$$\n\\begin{aligned}\nE_{p(x,y)}[L(f(x),y)]&=\\int_x p(x,y)L(f(x),y)dx\\\n&=\\int_x\\sum_{i=1}^kp(y=i|x)p(x)L(f(x),y)dx\n\\end{aligned} \\tag{2}\n$$\n由于在偏标记学习中，数据集不是一个样本点+一个标签的形式，其是一个样本点+一个候选标签集的形式，即$(x,Y)$。因此考虑将$p(y=i|x)$改写成带有$Y$的式子。我们可以将其作如下恒等变换\n$$\np(y=i|x)=\\frac{1}{|c|}\\sum_{Y\\in C}p(Y|x)\\frac{p(y=i|x)}{p(Y|x)} \\tag{3}\n$$\n将$(3)$带入$(2)$中：\n$$\n\\begin{aligned}\nE_{p(x,y)}[L(f(x),y)]&=\\int_x p(x,y)L(f(x),y)dx\\\n&=\\int_x\\sum_{i=1}^kp(y=i|x)p(x)L(f(x),y)dx \\\n&=\\int_x\\sum_{i=1}^k \\frac{1}{|c|}\\sum_{Y\\in C}p(Y|x)\\frac{p(y=i|x)}{p(Y|x)}p(x)L(f(x),y)dx\\\n&=\\frac{1}{|c|}\\int_x \\sum_{Y\\in C}p(Y|x)p(x)\\sum_{i=1}^k\\frac{p(y=i|x)}{p(Y|x)}L(f(x),y)dx\\\n&=\\frac{1}{|c|}\\int_xp(x,Y)\\sum_{i=1}^k\\frac{p(y=i|x)}{p(Y|x)}L(f(x),y)dx\\\n&=\\frac{1}{|c|}E_{p(x,Y)}[\\sum_{i=1}^k\\frac{p(y=i|x)}{p(Y|x)}L(f(x),y)]\n\\end{aligned} \\tag{4}\n$$\n因此经过该变换，成功将监督学习样本空间$(x,y)$转化为弱监督学习样本空间$(x,Y)$。")]),a._v(" "),_("p",[a._v("接下来我们具体看一下$(4)$中每个部分如何计算")]),a._v(" "),_("ol",[_("li",[a._v("$P(Y|x)$")])]),a._v(" "),_("p",[a._v("根据这篇文章里面的假设：给定$x$的标签$y$，那么这个标签在$x$的候选标签集里面的概率为一个常数，也即对$x$来说，类别$i$成为它的标签的概率都是一样的，没有区别，具体写为如下：\n$$\np(Y|y=i)=\n\\begin{cases}\n\\frac{1}{2^{k-1}-1}& \\text i\\in Y\\\n0& \\text i\\notin Y\n\\end{cases}\n$$\n根据$p(Y|x)=\\sum_{i=1}^k p(Y|y=i)p(y=i|x)$，因此$p(Y|x)$可表示为：\n$$\n\\begin{aligned}\np(Y|x)&=\\sum_{i=1}^k p(Y|y=i)p(y=i|x)\\\n&=\\sum_{i\\in Y}\\frac{1}{2^{k-1}-1}p(y=i|x)\n\\end{aligned}\\tag{5}\n$$")]),a._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[a._v("$p(y=i|x)$")])]),a._v(" "),_("p",[a._v("由于这一项无法直接从我们现有的数据中得到，因此我们用softmax函数的输出分布概率来近似分布，也就是说$p(y=i|x)=g_i(x)$，其中$g_i(x)$是第$i$个类别属于$x$的标签的概率，也就是softmax输出的第$i$个值。其计算方式如下：\n$$\ng_i(x)=\\frac{\\exp(f_i(x))}{\\sum_{j=1}^k\\exp(f_j(x))}\\tag{6}\n$$\n并且假设$p(y=i|x)=g_i(x)\\ if\\ i\\in Y$，否则该值为0.")]),a._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[a._v("$L(f(x),y)$")])]),a._v(" "),_("p",[a._v("用最常见的交叉熵损失即可，$L(f(x),y)=-\\sum_{j=1}^ky_j\\ln f_j(x)$")]),a._v(" "),_("p",[a._v("总结：将$(5)$和$(6)$一同带入$(4)$中有如下结果\n$$\nR_{rc}(f)=\\frac{1}{2}E_{\\tilde{p}(x,Y)}[\\sum_{i-1}^k\\frac{exp(f_i(x))}{\\sum_{j\\in Y}\\exp(f_j(x))}L(f(x),y)]\n$$\n对于有$n$个样本的真实样本数据集，则有如下表达：\n$$\n\\hat{R}"),_("em",[a._v("{rc}(f)=\\frac{1}{2n}\\sum")]),a._v("{o=1}^n[\\sum_{i-1}^k\\frac{exp(f_i(x_o))}{\\sum_{j\\in Y_o}\\exp(f_j(x))}L(f(x_o),i)]\n$$")])])}),[],!1,null,null,null);_.default=$.exports}}]);